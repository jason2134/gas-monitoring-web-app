//Using three.js to do render(渲染)
//var frame = document.querySelector(".mainbox .column2 .container");
var frame = document.getElementById("c");
      let box = document.querySelector(".column");
var width = frame.clientWidth;
var height = frame.clientHeight;
var renderer;
       var scene;
        var camera;
      function initRender() {
        // var width = 456px;
        //   var height = 425px;
       
        renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(width,height);
        //renderer.setSize(width, height);
        //告诉渲染器需要阴影效果
        // renderer.setClearColor(0x000000);
        renderer.setClearColor(0x1e1048);
        document.getElementById("c").appendChild(renderer.domElement);
        //document.getElementById("c").appendChild(renderer.domElement);
      }

      function initCamera() {
        camera = new THREE.PerspectiveCamera(
          65,
          window.innerWidth / window.innerHeight,
          0.1,
          10000
        );
        // camera.position.set(200, 500, 500);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
      }
      function initScene() {
        scene = new THREE.Scene();
      }

      function initOn() {
        //var threeOnEvent = new THREE.onEvent(scene,camera);
        var interaction = new THREE.Interaction(renderer, scene, camera);
      }


      var light;
      function initLight() {
        scene.add(new THREE.AmbientLight(0x444444));

        light = new THREE.PointLight(0xffffff);
        light.position.set(0, 1000, 1000);

        //告诉平行光需要开启阴影投射
        light.castShadow = true;

        scene.add(light);
      }

       var stats;
      function initStats() {
        stats = new Stats();
       // document.body.appendChild(stats.dom);
      }

      //用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
      var controls;
      function initControls() {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.minAzimuthAngle = 0.25;
        controls.maxAzimuthAngle = 1.25;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI/2; 
        // 如果使用animate方法时，将此函数删除
        //controls.addEventListener( 'change', render );
        // 使动画循环使用时阻尼或自转 意思是否有惯性
        controls.enableDamping = true;
        //动态阻尼系数 就是鼠标拖拽旋转灵敏度
        //controls.dampingFactor = 0.25;
        //是否可以缩放
        controls.enableZoom = true;
        //是否自动旋转
        controls.autoRotate = false;
        controls.autoRotateSpeed = 0.5;
        //设置相机距离原点的最远距离
        controls.minDistance = 200;
        //设置相机距离原点的最远距离
        controls.maxDistance = 800;
        
        //是否开启右键拖拽
        controls.enablePan = true;
      }

      function render() {
        renderer.render(scene, camera);
      }

       //窗口变动触发的函数
      function onWindowResize() {
        width = frame.clientWidth;
        height = frame.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        render();
        renderer.setSize(width, height);
      }

      function animate() {
        //更新控制器
        render();

        //更新性能插件
        stats.update();

        controls.update();

        requestAnimationFrame(animate);
      }
