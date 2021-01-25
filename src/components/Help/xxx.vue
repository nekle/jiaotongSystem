<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<div id="box">

    <drag></drag>

</div>

<template id="drag">
    <div :style="json" @mousedown="move($event)"></div>
</template>
<script src="lib/bower_components/vue/dist/vue.js"></script>

<script>
new Vue({

  el:"#box",  //Vue对象作用的范围

  components:{

    'drag':{  //drag标签

      data:function(){

        return {

          json:{width:"100px",height:"100px",
            background:"red",position:"absolute"
          }
        }

      },

      methods:{

        move:function(el){

          var obj=this.$el;
          var disX=el.clientX-obj.offsetLeft;
          var disY=el.clientY-obj.offsetTop;

          document.onmousemove=function(el){

            var left=el.clientX-disX;
            var top=el.clientY-disY;

            obj.style.left=left+"px";
            obj.style.top=top+"px";

            document.onmouseup=function(){

              document.onmousemove=null;
              document.onmouseup=null;


            }
            return false;

          }
          return false;


        }

      },


      template:"#drag"
    }

  }

});
</script>
</body>
</html>