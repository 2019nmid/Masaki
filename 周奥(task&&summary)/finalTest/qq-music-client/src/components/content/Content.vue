<template>
<div id="content">
<SongRecommend class="SR"></SongRecommend>
<NewSong class="NS"></NewSong>
<AwesomeRecommend class="AR"></AwesomeRecommend>
<NewDish class="ND"></NewDish>
<LeaderBoard class="LB"></LeaderBoard>
<MV class="MV"></MV>
</div>
  
</template>

<script>
import SongRecommend from './SongRecommend'
import NewSong from './NewSong'
import AwesomeRecommend from './AwesomeRecommend'
import NewDish from './NewDish'
import LeaderBoard from './LeaderBoard'
import MV from './MV'
export default {
data () {
  return {
    
  }

} ,
 components: {
    SongRecommend,
    NewSong,
    AwesomeRecommend,
    NewDish,
    LeaderBoard,
    MV
  }
}
</script>

<style lang="scss" scoped>
#content{
position: relative;
  .SR{
    position: relative;
  }
  .NS{
    position: relative;
  }
  .AR{
position: relative;
  }
  .ND{
position: relative;
  }
  .LB{
    position: relative;
  }
  .MV{
    position: relative;
  }
}
</style>