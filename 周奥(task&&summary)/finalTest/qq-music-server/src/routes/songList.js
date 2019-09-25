const Router = require('koa-router');
const router = new Router();
const readJson = require('../data/data.js')

//热门搜索
router.get('/hotkey', async (ctx, err) => {
  const data = await readJson('/hotkey.json');
  ctx.body = JSON.parse(data)
})
//歌单推荐
router.get('/songRecommend', async (ctx, err) => {
  const data = await readJson('/songRecommend.json');
  ctx.body = JSON.parse(data)
})
//新歌首发
router.get('/newSong',async (ctx, err) => {
  const data = await readJson('/newSong.json');
  ctx.body = JSON.parse(data)
})
//精彩推荐
router.get('/awesomeRecommend',async (ctx, err) => {
  const data = await readJson('/awesomeRecommend.json');
  ctx.body = JSON.parse(data)
})
//新碟首发
router.get('/newDish',async (ctx, err) => {
  const data = await readJson('/newDish.json');
  ctx.body = JSON.parse(data)
})
//排行榜
router.get('/leaderBoard',async (ctx, err) => {
  const data = await readJson('/leaderBoard.json');
  ctx.body = JSON.parse(data)
})
//mv
router.get('/mv',async (ctx, err) => {
  const data = await readJson('/mv.json');
  ctx.body = JSON.parse(data)
})


module.exports = router.routes();