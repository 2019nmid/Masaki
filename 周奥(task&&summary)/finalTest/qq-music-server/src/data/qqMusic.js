const puppeteer = require('puppeteer-core')
const fs = require('fs')

const url = `https://y.qq.com/`

/******************通用函数*********************/
//延迟函数
const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

//启动浏览器并打开页面
async function openBrowser() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'c:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    ignoreDefaultArgs: ['--disable-extensions'],
    defaultViewport: {
      width: 1366,
      height: 768
    }
  })
  const page = await browser.newPage()
  await page.goto(url)
  return page
}

//等待元素出现
async function waitEle(page, selector) {
  await page.waitForSelector(selector)
}

async function closeDialog(page) {
  await sleep(7000)
  waitEle(page, '#divdialog_0 > div.popup__hd > a')
  const x = await page.$('#divdialog_0 > div.popup__hd > a')
  x.click()
}

/****************得到数据********************/
//热门搜索
async function hotKey(page) {
  const search_input = await page.$('input.search_input__input')
  await search_input.click()
  await page.waitForSelector('div.search_hot > dl > dd > a')

  const hotkey_res = await page.evaluate(() => {
    let hot_a = document.querySelectorAll('div.search_hot > dl > dd > a')
    let hot_key = []
    for (let i = 0; i < hot_a.length; i++) {
      const a = hot_a[i]
      const span = a.getElementsByTagName('span')
      const number = span[0].textContent
      const name = span[1].textContent
      const listen = span[2].textContent
      hot_key.push({
        number,
        name,
        listen
      })
    }
    return hot_key
  })
  return hotkey_res
}

//歌单推荐
async function songRecommend(page) {

  //等待ul>li数据出现
  async function getList() {
    await waitEle(page, '#taogelist_box > div.section_inner > div.mod_playlist.mod_slide > ul > li')
  }
  //得到按钮下的歌
  async function getSongList() {
    const song_res = await page.evaluate(() => {
      const li_list =
        '#taogelist_box > div.section_inner > div.mod_playlist.mod_slide > ul > li'
      let li_all = document.querySelectorAll(li_list)

      let song = []
      for (const item of li_all) {
        const box = item.querySelector('.playlist__item_box')
        const box_img = box.querySelector('.playlist__cover > a > img').src
        const box_title = box.querySelector('h4 > span > a').textContent
        const box_watch = box.querySelector('.playlist__other').outerText
        song.push({
          box_img,
          box_title,
          box_watch
        })
      }
      return song
    })
    return song_res
  }

  //按下下一页按钮
  async function click_btn() {
    const right_btn = await page.$('#taogelist_box > div.mod_slide_action > div.slide_action.slide_action--right > a')
    const length = await page.evaluate(() => {
      const btns = document.querySelectorAll('#taogelist_box > div.section_inner > div.mod_slide_switch.js_switch > a')
      return btns.length
    })
    for (let i = 0; i < length + 1; i++) {
      await sleep(3000)
      right_btn.click()
    }
  }

  //依次执行函数以得到最终数据
  async function getSongData() {
    await sleep(2000)
    await click_btn()
    await getList()
    return await getSongList()
  }

  //得到导航
  await sleep(3000)
  const nav = await page.$$eval('#taogelist_box > div.section_inner > div.mod_index_tab > a', links => {
    return links.map(a => {
      return {
        title: a.textContent
      }
    })
  })

  //导航下第1页
  await sleep(3000)
  const page1 = await page.$(
    '#taogelist_box > div.section_inner > div.mod_index_tab > a:nth-child(1)'
  )
  await page1.click()
  const page1_list = await getSongData()

  //导航下第2页
  await sleep(3000)
  const page2 = await page.$(
    '#taogelist_box > div.section_inner > div.mod_index_tab > a:nth-child(2)'
  )
  await page2.click()
  const page2_list = await getSongData()
  await sleep(1000)
  //导航下第3页
  await sleep(3000)
  const page3 = await page.$(
    '#taogelist_box > div.section_inner > div.mod_index_tab > a:nth-child(3)'
  )
  await page3.click()
  const page3_list = await getSongData()

  //导航下第4页
  await sleep(3000)
  const page4 = await page.$(
    '#taogelist_box > div.section_inner > div.mod_index_tab > a:nth-child(4)'
  )
  await page4.click()
  const page4_list = await getSongData()

  //导航下第5页 
  await sleep(3000)
  const page5 = await page.$(
    '#taogelist_box > div.section_inner > div.mod_index_tab > a:nth-child(5)'
  )
  await page5.click()
  const page5_list = await getSongData()

  //导航下第6页
  await sleep(3000)
  const page6 = await page.$(
    '#taogelist_box > div.section_inner > div.mod_index_tab > a:nth-child(6)'
  )
  await page6.click()
  const page6_list = await getSongData()

  return {
    'nav': nav,
    'page_list': {
      page1_list,
      page2_list,
      page3_list,
      page4_list,
      page5_list,
      page6_list,
    }
  }
}

//新歌首发
async function newSong(page) {

  //等待ul>li数据出现
  async function getList() {
    await waitEle(page, '#new_song_box > div.section_inner > div.mod_songlist.mod_slide > div > ul > li')
  }
  //得到按钮下的歌
  async function getSongList() {
    const song_res = await page.evaluate(() => {
      const ul_list =
        '#new_song_box > div.section_inner > div.mod_songlist.mod_slide > div > ul'
      let ul_all = document.querySelectorAll(ul_list)
      let song = []
      for (const ul_item of ul_all) {
        const li_list = ul_item.querySelectorAll('li')
        let ul_song = []
        for (const li_item of li_list) {
          const box = li_item.querySelector('.songlist__item_box')
          const box_img = box.querySelector('a > img').src
          const box_title = box.querySelector('.songlist__cont > h3 > a').textContent
          const box_time = box.querySelector('.songlist__time').textContent
          const box_author = box.querySelector('.songlist__cont > p > a').textContent
          ul_song.push({
            box_img,
            box_title,
            box_time,
            box_author
          })
        }
        song.push(ul_song)
      }
      return song
    })
    return song_res
  }

  //按下下一页按钮
  async function click_btn() {
    const right_btn = await page.$('#new_song_box > div.mod_slide_action > div.slide_action.slide_action--right > a')
    const length = await page.evaluate(() => {
      const btns = document.querySelectorAll('#new_song_box > div.section_inner > div.mod_slide_switch.js_switch > a')
      return btns.length
    })
    for (let i = 0; i < length + 1; i++) {
      await sleep(3000)
      right_btn.click()
    }
  }

  //依次执行函数以得到最终数据
  async function getSongData() {
    await sleep(2000)
    await click_btn()
    await getList()
    return await getSongList()
  }

  //得到导航
  await sleep(3000)
  const nav = await page.$$eval('#new_song_box > div.section_inner > div.mod_index_tab > a', links => {
    return links.map(a => {
      return {
        title: a.textContent
      }
    })
  })

  //导航下第1页
  await sleep(3000)
  const page1 = await page.$(
    '#new_song_box > div.section_inner > div.mod_index_tab > a:nth-child(1)'
  )
  await page1.click()
  const page1_list = await getSongData()

  //导航下第2页
  await sleep(3000)
  const page2 = await page.$(
    '#new_song_box > div.section_inner > div.mod_index_tab > a:nth-child(2)'
  )
  await page2.click()
  const page2_list = await getSongData()
  await sleep(1000)
  //导航下第3页
  await sleep(3000)
  const page3 = await page.$(
    '#new_song_box > div.section_inner > div.mod_index_tab > a:nth-child(3)'
  )
  await page3.click()
  const page3_list = await getSongData()

  //导航下第4页
  await sleep(3000)
  const page4 = await page.$(
    '#new_song_box > div.section_inner > div.mod_index_tab > a:nth-child(4)'
  )
  await page4.click()
  const page4_list = await getSongData()

  //导航下第5页 
  await sleep(3000)
  const page5 = await page.$(
    '#new_song_box > div.section_inner > div.mod_index_tab > a:nth-child(5)'
  )
  await page5.click()
  const page5_list = await getSongData()

  //导航下第6页
  await sleep(3000)
  const page6 = await page.$(
    '#new_song_box > div.section_inner > div.mod_index_tab > a:nth-child(6)'
  )
  await page6.click()
  const page6_list = await getSongData()

  return {
    'nav': nav,
    'page_list': {
      page1_list,
      page2_list,
      page3_list,
      page4_list,
      page5_list,
      page6_list,
    }
  }
}

//精彩推荐
async function awesomeRecommend(page) {

  //等待ul>li数据出现
  async function getList() {
    await waitEle(page, '#focus_box > div.section_inner > div.mod_event.mod_slide > ul > li')
  }
  //得到按钮下的歌
  async function getSongList() {
    const song_res = await page.evaluate(() => {
      const li_list =
        '#focus_box > div.section_inner > div.mod_event.mod_slide > ul > li'
      let li_all = document.querySelectorAll(li_list)

      let song = []
      for (const item of li_all) {
        const box_img = item.querySelector('a > img').src
        song.push({
          box_img,
        })
      }
      return song
    })
    return song_res
  }

  //按下下一页按钮
  async function click_btn() {
    const right_btn = await page.$('#focus_box > div.mod_slide_action > div.slide_action.slide_action--right > a')
    const length = await page.evaluate(() => {
      const btns = document.querySelectorAll('#focus_box > div.section_inner > div.mod_slide_switch.js_switch > a')
      return btns.length
    })
    for (let i = 0; i < length + 1; i++) {
      await sleep(3000)
      right_btn.click()
    }
  }

  //依次执行函数以得到最终数据
  async function getSongData() {
    await sleep(2000)
    await click_btn()
    await getList()
    return await getSongList()
  }

  //得到图片内容
  await sleep(3000)
  const page_list = await getSongData()
  return {
    'page_list': page_list,
  }
}

//新碟首发
async function newDish(page) {

  //等待ul>li数据出现
  async function getList() {
    await waitEle(page, '#new_album_box > div.section_inner > div.mod_playlist.mod_slide > div > ul> li')
  }
  //得到按钮下的歌
  async function getSongList() {
    const song_res = await page.evaluate(() => {
      const ul_list =
        '#new_album_box > div.section_inner > div.mod_playlist.mod_slide > div > ul'
      let ul_all = document.querySelectorAll(ul_list)

      let song = []
      for (const ul_item of ul_all) {
        const li_list = ul_item.querySelectorAll('li')
        let ul_song = []
        for (const li_item of li_list) {
          const box = li_item.querySelector('.playlist__item_box')
          const box_img = box.querySelector('.playlist__cover > a > img').src
          const box_title = box.querySelector('h4 > span > a').textContent
          const box_author = box.querySelector('.playlist__author').outerText
          ul_song.push({
            box_img,
            box_title,
            box_author
          })
        }
        song.push(ul_song)
      }

      return song
    })
    return song_res
  }


  //依次执行函数以得到最终数据
  async function getSongData() {
    await sleep(2000)
    await getList()
    return await getSongList()
  }

  //得到导航
  await sleep(3000)
  const nav = await page.$$eval('#new_album_box > div.section_inner > div.mod_index_tab > a', links => {
    return links.map(a => {
      return {
        title: a.textContent
      }
    })
  })

  //导航下第1页
  await sleep(3000)
  const page1 = await page.$(
    '#new_album_box > div.section_inner > div.mod_index_tab > a:nth-child(1)'
  )
  await page1.click()
  const page1_list = await getSongData()

  //导航下第2页
  await sleep(3000)
  const page2 = await page.$(
    '#new_album_box > div.section_inner > div.mod_index_tab > a:nth-child(2)'
  )
  await page2.click()
  const page2_list = await getSongData()
  await sleep(1000)
  //导航下第3页
  await sleep(3000)
  const page3 = await page.$(
    '#new_album_box > div.section_inner > div.mod_index_tab > a:nth-child(3)'
  )
  await page3.click()
  const page3_list = await getSongData()

  //导航下第4页
  await sleep(3000)
  const page4 = await page.$(
    '#new_album_box > div.section_inner > div.mod_index_tab > a:nth-child(4)'
  )
  await page4.click()
  const page4_list = await getSongData()

  //导航下第5页 
  await sleep(3000)
  const page5 = await page.$(
    '#new_album_box > div.section_inner > div.mod_index_tab > a:nth-child(5)'
  )
  await page5.click()
  const page5_list = await getSongData()

  //导航下第6页
  await sleep(3000)
  const page6 = await page.$(
    '#new_album_box > div.section_inner > div.mod_index_tab > a:nth-child(6)'
  )
  await page6.click()
  const page6_list = await getSongData()

  return {
    'nav': nav,
    'page_list': {
      page1_list,
      page2_list,
      page3_list,
      page4_list,
      page5_list,
      page6_list,
    }
  }
}

//排行榜
async function leaderBoard(page) {

  //等待ul>li数据出现
  async function getList() {
    await waitEle(page, '#toplist_box > div > div.mod_toplist > ul > li')
  }
  //得到按钮下的歌
  async function getSongList() {
    const song_res = await page.evaluate(() => {
      const li_list =
        '#toplist_box > div > div.mod_toplist > ul > li'
      let li_all = document.querySelectorAll(li_list)

      let song = []

      for (const li_item of li_all) {
        const li_list = li_item.querySelectorAll('div > ul >li')
        const li_title = li_item.querySelector('div > h3 >a').textContent
        let item_song = []
        console.log(li_list)
        for (const li_item of li_list) {
          const box_title = li_item.querySelector('.toplist__songname > a').textContent
          const box_author = li_item.querySelector('.toplist__artist > a').textContent
          item_song.push({
            box_title,
            box_author
          })
        }
        song.push({
          li_title,
          item_song
        })
      }

      return song
    })
    return song_res
  }


  //依次执行函数以得到最终数据
  async function getSongData() {
    await sleep(2000)
    await getList()
    return await getSongList()
  }


  //执行
  await sleep(3000)
  const page_list = await getSongData()

  return {
    page_list
  }
}

//mv
async function mv(page) {

  //等待ul>li数据出现
  async function getList() {
    await waitEle(page, '#mv_box > div.section_inner > div.mod_mv.mod_slide > div > ul > li')
  }
  //得到按钮下的歌
  async function getSongList() {
    const song_res = await page.evaluate(() => {
      const ul_list =
        '#mv_box > div.section_inner > div.mod_mv.mod_slide > div > ul'
      let ul_all = document.querySelectorAll(ul_list)
      let song = []
      for (const ul_item of ul_all) {
        const li_list = ul_item.querySelectorAll('li')
        let ul_song = []
        for (const li_item of li_list) {
          console.log(li_item)
          const box = li_item.querySelector('.mv_list__item_box')
          const box_img = box.querySelector('a > img').src
          const box_title = box.querySelector('h3 > a').textContent
          const box_author = box.querySelector('p > a').textContent
          const box_watch = box.querySelector('.mv_list__info > span').outerText

          ul_song.push({
            box_img,
            box_title,
            box_author,
            box_watch
          })
        }
        song.push(ul_song)
      }
      return song
    })
    return song_res
  }

  //按下下一页按钮
  async function click_btn() {
    const right_btn = await page.$('#mv_box > div.mod_slide_action > div.slide_action.slide_action--right > a')
    const length = await page.evaluate(() => {
      const btns = document.querySelectorAll('#mv_box > div.section_inner > div.mod_slide_switch.js_switch > a')
      return btns.length
    })
    for (let i = 0; i < length + 1; i++) {
      await sleep(3000)
      right_btn.click()
    }
  }

  //依次执行函数以得到最终数据
  async function getSongData() {
    await sleep(2000)
    await click_btn()
    await getList()
    return await getSongList()
  }

  //得到导航
  await sleep(3000)
  const nav = await page.$$eval('#mv_box > div.section_inner > div.mod_index_tab > a', links => {
    return links.map(a => {
      return {
        title: a.textContent
      }
    })
  })

  //导航下第1页
  await sleep(3000)
  const page1 = await page.$(
    '#mv_box > div.section_inner > div.mod_index_tab > a:nth-child(1)'
  )
  await page1.click()
  const page1_list = await getSongData()

  //导航下第2页
  await sleep(3000)
  const page2 = await page.$(
    '#mv_box > div.section_inner > div.mod_index_tab > a:nth-child(2)'
  )
  await page2.click()
  const page2_list = await getSongData()
  await sleep(1000)
  //导航下第3页
  await sleep(3000)
  const page3 = await page.$(
    '#mv_box > div.section_inner > div.mod_index_tab > a:nth-child(3)'
  )
  await page3.click()
  const page3_list = await getSongData()

  //导航下第4页
  await sleep(3000)
  const page4 = await page.$(
    '#mv_box > div.section_inner > div.mod_index_tab > a:nth-child(4)'
  )
  await page4.click()
  const page4_list = await getSongData()

  //导航下第5页 
  await sleep(3000)
  const page5 = await page.$(
    '#mv_box > div.section_inner > div.mod_index_tab > a:nth-child(5)'
  )
  await page5.click()
  const page5_list = await getSongData()

  //导航下第6页
  await sleep(3000)
  const page6 = await page.$(
    '#mv_box > div.section_inner > div.mod_index_tab > a:nth-child(6)'
  )
  await page6.click()
  const page6_list = await getSongData()

  return {
    'nav': nav,
    'page_list': {
      page1_list,
      page2_list,
      page3_list,
      page4_list,
      page5_list,
      page6_list,
    }
  }
}






/************************启动+存入数据*****************************/
//写入数据
async function writeJson(file, data) {
  fs.writeFileSync(`${file}.json`, JSON.stringify(data))
}


//抓取qq音乐数据
async function grub() {
  const page = await openBrowser()
  console.log('ready')
  closeDialog(page)
  await writeJson('hotKey', await hotKey(page))
  await writeJson('songRecommend',await songRecommend(page))
  await writeJson('newSong',await newSong(page))
  await writeJson('awesomeRecommend',await awesomeRecommend(page))
  await writeJson('newDish', await newDish(page))
  await  writeJson('leaderBoard',await leaderBoard(page))
  await writeJson('mv', await mv(page))

  console.log('down')
  page.close()
}

// grub()