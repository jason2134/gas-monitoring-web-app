//MODELS
function initOverall() {
        camera.position.set(200, 500, 500);
        //辅助工具
        var helper = new THREE.AxesHelper(50);
        scene.add(helper);
        //floors
        var floors = new THREE.STLLoader();
        floors.load("stl/overall/3FloorV1.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#2e4b7a" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1);//缩放
          mesh.name = 'overall_floor';
          //geometry.center(); //居中显示
          scene.add(mesh);
          var isClick = false;
        });
        //buildings
        var buildings = new THREE.STLLoader();
        buildings.load("stl/overall/3buildingsV1.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#79a9cd" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1);
          //缩放
          mesh.name = 'overall_building';
          //mesh.position.set(0, 0.5, 0);
          scene.add(mesh);
          var isClick = false;
        });
        //lifts
        var lifts = new THREE.STLLoader();
        lifts.load("stl/overall/lifts.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({
            color: "#f5f5f5",
            opacity: 0.7,
            transparent: true,
          });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = 'lift';
          scene.add(mesh);
          var isClick = false;
        });
        //text
        var text = new THREE.STLLoader();
        text.load("stl/overall/text.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({
            color: "#ffffff"
          });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = 'text';
          scene.add(mesh);
          var isClick = false;
        });
      }

function initF1() {
        camera.position.set(300, 450, 400);
        //辅助工具
        var helper = new THREE.AxesHelper(50);
        scene.add(helper);
        //floors
        var floors = new THREE.STLLoader();
        floors.load("stl/F1/F1_floor.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#2e4b7a" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F1_floor";
          //geometry.center(); //居中显示
          scene.add(mesh);
          var isClick = false;
        });
        //buildings
        var buildings = new THREE.STLLoader();
        buildings.load("stl/F1/F1_buildings.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#79a9cd" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F1_Building";
          //mesh.position.set(0, 6, 0);
          scene.add(mesh);
          var isClick = false;
        });
        var F1_text = new THREE.STLLoader();
        F1_text.load("stl/F1/F1_text.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#ffffff" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F1_text";
          //mesh.position.set(0, 6, 0);
          scene.add(mesh);
          var isClick = false;
        });
      }

      function initF2() {
        camera.position.set(300, 450, 400);
        //辅助工具
        var helper = new THREE.AxesHelper(50);
        scene.add(helper);
        //floors
        var floors = new THREE.STLLoader();
        floors.load("stl/F2/F2_floor.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#2e4b7a" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F2_floor";
          //geometry.center(); //居中显示
          scene.add(mesh);
          var isClick = false;
        });
        //buildings
        var buildings = new THREE.STLLoader();
        buildings.load("stl/F2/F2_buildings.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#79a9cd" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F2_Building";
          scene.add(mesh);
          var isClick = false;
        });
      }

      function initF3() {
        camera.position.set(300, 450, 400);
        //辅助工具
        var helper = new THREE.AxesHelper(50);
        scene.add(helper);
        //floors
        var floors = new THREE.STLLoader();
        floors.load("stl/F3/F3_floor.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#2e4b7a" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F3_floor";
          //geometry.center(); //居中显示
          scene.add(mesh);
          var isClick = false;
        });
        //buildings
        var buildings = new THREE.STLLoader();
        buildings.load("stl/F3/F3_buildings.stl", function (geometry) {
          //创建纹理
          var mat = new THREE.MeshLambertMaterial({ color: "#79a9cd" });
          var mesh = new THREE.Mesh(geometry, mat);
          mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
          mesh.scale.set(1, 1, 1); //缩放
          mesh.name = "F3_Building";
          scene.add(mesh);
          var isClick = false;
        });
      }


//SENSOR NODES
function initNode1() {
        // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node1 = new THREE.Mesh(geometry, material);
        Node1.position.set(10, 1.5, 0);
        Node1.castShadow = true;
        scene.add(Node1);
        Node1.cursor = "pointer";
        Node1.name = "node1";
        Node1.on("click", function (ev) {
          hist_nodeState = 1;//in histOpt.js
          displayHist();//in histOpt.js
        });
      }

function initTestBuilding() {
        var geometry = new THREE.BoxGeometry(40, 100, 6);
        var material = new THREE.MeshLambertMaterial({
          color: 0x79a9cd,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var test = new THREE.Mesh(geometry, material);
        test.position.set(45.2, 2.5, 0);
        test.rotation.x = -0.5 * Math.PI;
        test.rotation.z = Math.PI * (165 / 180);
        test.castShadow = true;
        scene.add(test);
        test.cursor = "pointer";
        test.name = "testB";
        test.on("click", function (ev) {
          refreshhistNode1();
        });
}

function initOverallNode2() {
        // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node2 = new THREE.Mesh(geometry, material);
        Node2.position.set(-100, 151.5, 0);
        Node2.castShadow = true;
        scene.add(Node2);
        Node2.cursor = "pointer";
        Node2.name = "Overall_node2";
        Node2.on("click", function (ev) {
          hist_nodeState = 2;//in histOpt.js
          displayHist();//in histOpt.js
        });
}

function initF2Node2() {
      // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node2 = new THREE.Mesh(geometry, material);
        Node2.position.set(-100, 1.5, 0);
        Node2.castShadow = true;
        scene.add(Node2);
        Node2.cursor = "pointer";
        Node2.name = "F2_node2";
        Node2.on("click", function (ev) {
          hist_nodeState = 2;//in histOpt.js
          displayHist();//in histOpt.js
        });
}
   
 function initOverallNode3() {
        // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node3 = new THREE.Mesh(geometry, material);
        Node3.position.set(-250, 151.5, 0);
        Node3.castShadow = true;
        scene.add(Node3);
        Node3.cursor = "pointer";
        Node3.name = "Overall_node3";
        Node3.on("click", function (ev) 
        {
          hist_nodeState = 3;//in histOpt.js
          displayHist();//in histOpt.js
        });
}

function initF2Node3() {
      // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node3 = new THREE.Mesh(geometry, material);
        Node3.position.set(-250, 1.5, 0);
        Node3.castShadow = true;
        scene.add(Node3);
        Node3.cursor = "pointer";
        Node3.name = "F2_node3";
        Node3.on("click", function (ev) 
        {
          hist_nodeState = 3;//in histOpt.js
          displayHist();//in histOpt.js
        });
}

function initOverallNode4() {
        // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node4 = new THREE.Mesh(geometry, material);
        Node4.position.set(-450, 301.5, 0);
        Node4.castShadow = true;
        scene.add(Node4);
        Node4.cursor = "pointer";
        Node4.name = "Overall_node4";
        Node4.on("click", function (ev) {
          hist_nodeState = 4;//in histOpt.js
          displayHist();//in histOpt.js
        });
}
 
function initF3Node4() {
      // create a cube
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshLambertMaterial({
          color: 0xef6500,
          needsUpdate: true,
          opacity: 1,
          transparent: true,
        });
        var Node4 = new THREE.Mesh(geometry, material);
        Node4.position.set(-450, 1.5, 0);
        Node4.castShadow = true;
        scene.add(Node4);
        Node4.cursor = "pointer";
        Node4.name = "F3_node4";
        Node4.on("click", function (ev) {
          hist_nodeState = 4;//in histOpt.js
          displayHist();//in histOpt.js
        });
}


//TEXT

//ICONS
function overallIcon() {
      var t1 = new THREE.TextureLoader().load("images/toilet.png");
      var t1Material = new THREE.SpriteMaterial({
      color:0xffffff,//设置精灵矩形区域颜色
      //rotation:Math.PI/4,//旋转精灵对象45度，弧度值
      map: t1,//设置精灵纹理贴图
      });
      // 创建精灵模型对象，不需要几何体geometry参数
      var toilet = new THREE.Sprite(t1Material);
      scene.add(toilet);
      // 控制精灵大小，比如可视化中精灵大小表征数据大小
      toilet.name = "toilet";
      toilet.scale.set(20, 20, 1);
      toilet.position.set(100, 10);
      var l1 = new THREE.TextureLoader().load("images/lift.png");
      var l1Material = new THREE.SpriteMaterial({
      color:0xffffff,//设置精灵矩形区域颜色
      map: l1,//设置精灵纹理贴图
      });

      var lift = new THREE.Sprite(l1Material);
      scene.add(lift);
      lift.name = "lift";
      lift.scale.set(20, 20, 1);
      //// 只需要设置x、y两个分量就可以
      lift.position.set(10, 160);
}

function f1Icon() {
      var t1 = new THREE.TextureLoader().load("images/toilet.png");
      var t1Material = new THREE.SpriteMaterial({
      color:0xffffff,//设置精灵矩形区域颜色
      map: t1,//设置精灵纹理贴图
      });
      var toilet = new THREE.Sprite(t1Material);
      scene.add(toilet);
      toilet.name = "toilet";
      toilet.scale.set(20, 20, 1);
      toilet.position.set(100, 10);
}

function f2Icon() {
      var l1 = new THREE.TextureLoader().load("images/lift.png");
      var l1Material = new THREE.SpriteMaterial({
      color:0xffffff,//设置精灵矩形区域颜色
      map: l1,//设置精灵纹理贴图
      });
      var lift = new THREE.Sprite(l1Material);
      scene.add(lift);
      lift.name = "lift";
      lift.scale.set(20, 20, 1);
    //// 只需要设置x、y两个分量就可以
      lift.position.set(10, 10);
}

//DELETE OBJ
function deleteOverall() {
  var floor = scene.getObjectByName('overall_floor');
  var building = scene.getObjectByName('overall_building');
  var lift = scene.getObjectByName('lift');
  var toilet = scene.getObjectByName('toilet');
  var node1 = scene.getObjectByName("node1");
  var node2 = scene.getObjectByName("Overall_node2");
  var node3 = scene.getObjectByName("Overall_node3");
  var node4 = scene.getObjectByName("Overall_node4"); 
  var text = scene.getObjectByName("text");
  scene.remove(floor);
  scene.remove(building);
  scene.remove(toilet);
  scene.remove(lift);
  scene.remove(node1);
  scene.remove(node2);
  scene.remove(node3);
  scene.remove(node4);
  scene.remove(text);
}

function deleteF1() {
  var floor = scene.getObjectByName("F1_floor");
  var building = scene.getObjectByName("F1_Building");
  var node1 = scene.getObjectByName("node1");
  var F1_text = scene.getObjectByName("F1_text");
  scene.remove(floor);
  scene.remove(building);
  scene.remove(node1);
  scene.remove(F1_text);
}

function deleteF2() {
  var floor = scene.getObjectByName("F2_floor");
  var building = scene.getObjectByName("F2_Building");
  var node2 = scene.getObjectByName("F2_node2");
  var node3 = scene.getObjectByName("F2_node3");
  scene.remove(floor);
  scene.remove(building);
  scene.remove(node2);
  scene.remove(node3);
}

function deleteF3() {
  var floor = scene.getObjectByName("F3_floor");
  var building = scene.getObjectByName("F3_Building");
  var node4 = scene.getObjectByName("F3_node4");
  //var node2 = scene.getObjectByName("node2");
  scene.remove(floor);
  scene.remove(building);
  scene.remove(node4);
  //scene.remove(node2);
}

//ADD OBJ TO SCENE, they are all called in historyData.html
function onClickOverall() {
  deleteOverall();
  deleteOverall();
  deleteF1();
  deleteF2();
  deleteF3();
  initOverall();
  initNode1();
  initOverallNode2();
  initOverallNode3();
  initOverallNode4();
  overallIcon();
  document.getElementById("dashboardTitle").innerHTML = "HISTORY DATA";
}

function onClickF1() {
  deleteOverall();
  deleteOverall();
  deleteF1();
  deleteF2();
  deleteF3();
  initF1();
  initNode1();
  f1Icon();
document.getElementById("dashboardTitle").innerHTML = "HISTORY DATA - F1";
}

function onClickF2() {
  deleteOverall();
  deleteOverall();
  deleteF1();
  deleteF2();
  deleteF3();
  initF2();
  initF2Node2();
  initF2Node3();
  f2Icon()
  document.getElementById("dashboardTitle").innerHTML = "HISTORY DATA - F2";
}

function onClickF3() {
  deleteOverall();
    deleteOverall();
  deleteF1();
  deleteF2();
  deleteF3();
  initF3();
  initF3Node4();
  document.getElementById("dashboardTitle").innerHTML = "HISTORY DATA - F3";
}

//初始化dat.GUI简化试验流程
var gui = {};
function initGui() 
{
    //声明一个保存需求修改的相关数据的对象
    var datGui = new dat.GUI();
    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
    var obj = {};
}

function draw() 
{
    //1:renderer dom setup
    initRender();
    initScene();
    initCamera();
    initLight();
    //2:model and controls
    //initGui();
    initOn();
    initOverall();
    overallIcon();
    initNode1();
    initOverallNode2();
    initOverallNode3();
    initOverallNode4();
    // initTestBuilding();
    initControls();
    initStats();
    animate();
    window.onresize = onWindowResize;
}
