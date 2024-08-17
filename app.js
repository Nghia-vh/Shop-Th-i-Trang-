
angular.module("myApp", ['ngRoute'])
.run(function ($rootScope, $timeout) {
  $rootScope.$on("$routeChangeStart", function () {
    $rootScope.isLoading = true;
  });
  $rootScope.$on("$routeChangeSuccess", function () {
    $timeout(function () {
      $rootScope.isLoading = false;
    }, 1000);
  });
  $rootScope.$on("$routeChangeError", function () {
    $rootScope.isLoading = false;
    alert("Khoong theer tair trang");
  });
})

.config(function($routeProvider){
  $routeProvider
  
  .when('/',{
    templateUrl:'layout/trangchu.html?'+Math.random(),
    controller:'homeCtrl'
  })
  .when('/sanpham',{
    templateUrl:'layout/sanpham.html?'+Math.random(),
    controller:'sanphamCtrl'
  })
  .when('/sanphamThue',{
    templateUrl:'layout/spThue.html?'+Math.random(),
    controller:'sanphamThueCtrl'
  })
  .when('/sanphamVip',{
    templateUrl:'layout/spDb.html?'+Math.random(),
    controller:'sanphamVipCtrl'
  })
  .when('/chitietSP/:id',{
    templateUrl:'layout/chitietSP.html?'+Math.random(),
    controller:'chitietSPCtrl'
  })
  .when('/cart',{
    templateUrl:'layout/cart.html?'+Math.random(),
    controller:'cartCtrl'
  })
  .when('/thanhtoan',{
    templateUrl:'layout/thanhtoan.html?'+Math.random(),
    controller:'thanhtoanCtrl'
  })
  .when('/login',{
    templateUrl:'layout/login.html?'+Math.random(),

  })
  .when('/dangky',{
    templateUrl:'layout/dangky.html?'+Math.random(),

  })
  .when('/admin',{
    templateUrl:'layout/admin.html?'+Math.random(),
    controller:'logoutCtrl'

  })
  .when('/about',{
    templateUrl:'about.html?'+Math.random(),
    controller:'aboutCtrl'

  })
  .when('/contact',{
    templateUrl:'contact.html?'+Math.random(),

  })
  .when('/gopy',{
    templateUrl:'gopy.html?'+Math.random(),

  })
  .when('/hoidap',{
    templateUrl:'hoidap.html?'+Math.random(),

  })
  .when('/taikhoan/login',{
    templateUrl:'taikhoan/login.html?'+Math.random(),

  })
  .when('/taikhoan/pass',{
    templateUrl:'taikhoan/pass.html?'+Math.random(),

  })
  .when('/taikhoan/dangky',{
    templateUrl:'taikhoan/dangky.html?'+Math.random(),

  })
  .when("/caterory/:id", {
    templateUrl: "ProductList.html",
    controller:"categoryCtrl"
    })
    .when("/supplier/:id", {
    templateUrl: "ProductList.html",
    controller: "supplierCtrl"
    })
    .when("/special/:id", {
    templateUrl: "ProductList.html",
    controller: "specialCtrl"
    })
  .when('/taikhoan/logout',{
    redirectTo: "/home"

  })

  
  
  .otherwise({
    template:'<h1>404-không tìm thấy trang</h1>'


  })
})



.controller("homeCtrl", function($scope) {
})
.controller("sanphamCtrl", function($scope,$http) {
 
  // top xem nhiều
  $scope.getTop5ByViews = function() {
    $http.get('sanpham.json').then(function(res) {
      // thanh công
        console.log(res);
        $scope.dsSP = res.data;
        $scope.dsSP.sort(function(a, b) {
            return b.view - a.view;
        });
        $scope.order = $scope.dsSP.view.slice(0, 5);
    }, function(res) {
        // Lỗi
        alert('Lỗi không tải được dữ liệu');
    });
    
};
// top bán  chạy 
$scope.getTop5ByBan = function() {
  $http.get('sanpham.json').then(function(res) {
    // thanh công
      console.log(res);
      $scope.dsSP = res.data;
      $scope.dsSP.sort(function(a, b) {
          return b.ban - a.ban;
      });
      $scope.order = $scope.dsSP.ban.slice(0, 5);
  }, function(res) {
      // Lỗi
      alert('Lỗi không tải được dữ liệu');
  });
  
};
// phân trang
  $scope.limit=4;
  $scope.page= 1;
  $scope.begin = ($scope.page-1)*$scope.limit;
  $scope.chuyenTrang=function(trang){
    $scope.page=trang;
    $scope.begin = ($scope.page-1)*$scope.limit;
  }
  $scope.totalPage = function(){
    return Math.ceil($scope.dsSP.length / $scope.limit)
  }
  $scope.pageList = function(){
    let arr=[];
    for(let i=1;i<=$scope.totalPage();i++){
      arr.push(i);
    }
    return arr;
  }
  

})
.controller("sanphamThueCtrl", function($scope,$http) {
 
  // top xem nhiều
  $scope.getTop5ByViews = function() {
    $http.get('sanpham.json').then(function(res) {
      // thanh công
        console.log(res);
        $scope.dsSP = res.data;
        $scope.dsSP.sort(function(a, b) {
            return b.view - a.view;
        });
        $scope.order = $scope.dsSP.view.slice(0, 5);
    }, function(res) {
        // Lỗi
        alert('Lỗi không tải được dữ liệu');
    });
    
};
// top bán  chạy 
$scope.getTop5ByBan = function() {
  $http.get('sanpham.json').then(function(res) {
    // thanh công
      console.log(res);
      $scope.dsSP = res.data;
      $scope.dsSP.sort(function(a, b) {
          return b.ban - a.ban;
      });
      $scope.order = $scope.dsSP.ban.slice(0, 5);
  }, function(res) {
      // Lỗi
      alert('Lỗi không tải được dữ liệu');
  });
  
};
// phân trang
  $scope.limit=4;
  $scope.page= 1;
  $scope.begin = ($scope.page-1)*$scope.limit;
  $scope.chuyenTrang=function(trang){
    $scope.page=trang;
    $scope.begin = ($scope.page-1)*$scope.limit;
  }
  $scope.totalPage = function(){
    return Math.ceil($scope.dsThue.length / $scope.limit)
  }
  $scope.pageList = function(){
    let arr=[];
    for(let i=1;i<=$scope.totalPage();i++){
      arr.push(i);
    }
    return arr;
  }
  
  $scope.dsThue=[];
  for(let i=0;i<$scope.dsSP.length;i++){
   if ($scope.dsSP[i].danhmuc=="Vip"){
     $scope.dsThue.push($scope.dsSP[i]); 
   }

  }
})
.controller("sanphamVipCtrl", function($scope,$http) {
 
  // top xem nhiều
  $scope.getTop5ByViews = function() {
    $http.get('sanpham.json').then(function(res) {
      // thanh công
        console.log(res);
        $scope.dsSP = res.data;
        $scope.dsSP.sort(function(a, b) {
            return b.view - a.view;
        });
        $scope.order = $scope.dsSP.view.slice(0, 5);
    }, function(res) {
        // Lỗi
        alert('Lỗi không tải được dữ liệu');
    });
    
};
// top bán  chạy 
$scope.getTop5ByBan = function() {
  $http.get('sanpham.json').then(function(res) {
    // thanh công
      console.log(res);
      $scope.dsSP = res.data;
      $scope.dsSP.sort(function(a, b) {
          return b.ban - a.ban;
      });
      $scope.order = $scope.dsSP.ban.slice(0, 5);
  }, function(res) {
      // Lỗi
      alert('Lỗi không tải được dữ liệu');
  });
  
};
// phân trang
  $scope.limit=4;
  $scope.page= 1;
  $scope.begin = ($scope.page-1)*$scope.limit;
  $scope.chuyenTrang=function(trang){
    $scope.page=trang;
    $scope.begin = ($scope.page-1)*$scope.limit;
  }
  $scope.totalPage = function(){
    return Math.ceil($scope.dsVip.length / $scope.limit)
  }
  $scope.pageList = function(){
    let arr=[];
    for(let i=1;i<=$scope.totalPage();i++){
      arr.push(i);
    }
    return arr;
  }
// phân sp 

  $scope.dsVip=[];
  for(let i=0;i<$scope.dsSP.length;i++){
   if ($scope.dsSP[i].danhmuc=="Vip"){
     $scope.dsVip.push($scope.dsSP[i]); 
   }

  }


})
.controller("chitietSPCtrl", function($scope,$routeParams) {
  
    $scope.id = $routeParams.id;
    // dựa id tìm trong mảng/ query trong database
    $scope.sp = $scope.dsSP.filter((i) => i.id == $scope.id)[0]; // [0] lấy Object trong mảng
    // cách 2:
    // $scope.sp = $scope.dsSP.find((i) => i.id == $scope.id);
    $scope.spLienquan=[];
  for(let i=0;i<$scope.dsSP.length;i++){
   if ($scope.dsSP[i].danhmuc==$scope.sp.danhmuc){
     $scope.spLienquan.push($scope.dsSP[i]); 
   }
  

  }
  var index = $scope.spLienquan.findIndex((item) => item.id === parseInt($routeParams.id));
  if (index !== -1) {
      $scope.spLienquan.splice(index, 1); 
  }

    $scope.showimg=function(img){
       $scope.anh=img;
       return $scope.anh;
    }
  

    $scope.limit=3;
  $scope.page= 1;
  $scope.begin = ($scope.page-1);
  $scope.chuyenTrang=function(trang){
    $scope.page=trang;
   $scope.begin=($scope.page-1);
  }
  $scope.totalPage = function(){
    return Math.ceil($scope.sp.imgCt.length -$scope.limit+1)
  }
  $scope.pageList = function(){
    let arr=[];
    for(let i=1;i<=$scope.totalPage();i++){
      arr.push(i);
    }
    return arr;
  }
    
  
// console.log($scope.spLienquan)

})
.controller("cartCtrl", function($scope,$routeParams,$location) {
  
  $scope.id = $routeParams.id;
  // dựa id tìm trong mảng/ query trong database
  $scope.sp = $scope.dsSP.filter((i) => i.id == $scope.id)[0]; // [0] lấy Object trong mảng
  // cách 2:
  // $scope.sp = $scope.dsSP.find((i) => i.id == $scope.id);
  $scope.spLienquan=[];
   $scope.Thanhtoan=function(){
    if($scope.taiKhoan.length>0){
      $location.path('/thanhtoan');

    }else{
      alert('Vui lòng đăng nhập trước khi thanh toán')
    }
   }
  

})

.controller("thanhtoanCtrl", function($scope,$http,$location) {
  
  $scope.dsTinh=[];
$http.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json?fbclid=IwAR3fLfqTiG3q1KIPWVpr_pIwGFOdGHQnIv8fAHlbhG-azS-jl_FzAV35Ue0_aem_AXmbgTQ-XiWfz9tYL6keZmiMLT6VUZ4_Xt23r-GKyJDuC_Uw8mLvE8z-JnD5v0czO6FSKG5MjhJy5fAZh0uN28gl').then(
function(res){
  console.log(res);

  $scope.dsTinh=res.data;
},
function(res){
alert('lỗi k thấy dữ liệu')
}
) 
$scope.tbtt="";


$scope.applyDiscount = function() {
  if ($scope.selectedSale) {
      // Thực hiện các hành động cần thiết khi áp dụng giảm giá,
      // ví dụ: lưu giá trị giảm giá được chọn vào biến $scope.sale
      $scope.sale = $scope.selectedSale;
      // Hoặc thực hiện các hành động khác mà bạn muốn
  } else {
      // Hiển thị thông báo hoặc xử lý khi người dùng chưa chọn giảm giá
      alert("Vui lòng chọn giảm giá trước khi áp dụng.");
  }
};
 
})
.controller("logoutCtrl", function($scope,$location) {
 
})


.controller("loginCtrl", function($scope) {
  
})

.filter("search", function () { 
  return function (input, keyword, attr) {
    let kq = [];
    if (keyword) {
      keyword = keyword.toLowerCase();
      attr.forEach((thuoctinh) => {
        let tmp = input.filter((item) => {
          return (
            item[thuoctinh].toString().toLowerCase().indexOf(keyword) >= 0
          );
        });
        kq.push(...tmp);
      });
    } else {
      kq = input;
    }
    return kq;
  };
})



.controller("myCtrl", function($scope,$http,$location) {



  $scope.dsSP=[];
  $http.get('sanpham.json').then(
    function(res){
   // thành công
    console.log(res);
    $scope.dsSP=res.data;

    sessionStorage.setItem('dssp', JSON.stringify($scope.dsSP));
    $scope.dssp = JSON.parse(sessionStorage.getItem('dssp')) || [] ;
     },

    function(res){
      alert('lỗi không tải được dữ liệu')
    }
  );

//   $scope.dsuser = [];
// $scope.dsUser = JSON.parse(sessionStorage.getItem('user')) || []; 

// $http.get('user.json').then(
//     function(res){
//         if (!$scope.dsUser || $scope.dsUser.length === 0) { 
//             $scope.dsUser = [];
//         }
//         // Thành công
//         console.log(res);
//         $scope.dsuser = res.data;

//         sessionStorage.setItem('user', JSON.stringify($scope.dsuser));
//         $scope.dsUser = JSON.parse(sessionStorage.getItem('user')) || [];
//         console.log($scope.dsUser);
//     },
//     function(res){
//         alert('Lỗi không tải được dữ liệu');
//     }
// );



$scope.dsUser = [];

$http.get('user.json').then(
    function(res){
        
        // Thành công
        console.log(res);
        $scope.dsUser = res.data;

    },
    function(res){
        alert('Lỗi không tải được dữ liệu');
    }
);

$scope.userdk =  {}; 

$scope.dangky = function(fullname, phone, email, confirmPassword, form) {


    if (form == true) {
        var iddk = Math.random(1, 1000);
        $scope.userdk = {
            "idUser" : iddk, 
            "name" : fullname,
            "sđt" : phone,
            "email" : email,
            "passwork" : confirmPassword,
            "rote":0
        };


        $scope.dsUser.push($scope.userdk);
        alert('Đăng ký thành công')
        $location.path('/login');
    } else {
        alert('Vui lòng điền đầy đủ thông tin');
    }
};  


$scope.cart =  []; 

$scope.mua = function(sp) {
   

    if ($scope.cart.filter(i => i.id == sp.id).length == 0) {
        sp.quantity = 1;
        $scope.cart.push(sp);
        $location.path('/cart');

    } else {
        $scope.cart.forEach(i => {
            if (i.id == sp.id) {
                i.quantity++;
                $location.path('/cart');

            }
        });
    }
}


    $scope.tongTien= function(){
      let sum=0;
      $scope.cart.forEach(i=>{
        sum+=i.price*i.quantity;
      });
       return sum;
    }
  //   $scope.del = function(id) {
  //     let index = $scope.cart.findIndex(function(item) {
  //         return item.id === id;
  //     });
  //     if (index !== -1) {
  //         $scope.cart.splice(index, 1);
  //     }
  // }
  $scope.del = function(id) {
    let index = $scope.cart.findIndex((i) => i.id == id);
    if (index !== -1) {
        $scope.cart.splice(index, 1);
    }
}



   
    // đang nhập
    $scope.tk = [];
    $scope.taiKhoan = JSON.parse(sessionStorage.getItem('tk')) || []; 

    $scope.tt = "";

    $scope.login = function(user, pass) {
      if (!$scope.taiKhoan || $scope.taiKhoan.length === 0) { 
        $scope.taiKhoan = [];
    }
      for (let i = 0; i < $scope.dsUser.length; i++) {
          if (($scope.dsUser[i].email == user || $scope.dsUser[i].sđt == user) && $scope.dsUser[i].passwork == pass) {
              $scope.tk.push($scope.dsUser[i]);
              if ($scope.dsUser[i].rote == 1) {
                  // Chuyển hướng đến trang admin
                  $location.path('/admin');
              } else {
                  // Chuyển hướng đến trang chủ
                  $location.path('#!');
              }
              sessionStorage.setItem('tk', JSON.stringify($scope.tk));
              $scope.taiKhoan = JSON.parse(sessionStorage.getItem('tk')) || [];
        return $scope.taiKhoan;
      
          }
      }
      $scope.tt = "Sai tài khoản hoặc mật khẩu";
  }
  
  // đăng xuất
  $scope.dangxuat = function() {
    // Xóa thông tin tài khoản từ sessionStorage
    
    // Cập nhật lại biến $scope.taiKhoan thành một mảng rỗng
    $scope.taiKhoan = [];

    // Chuyển hướng đến trang đăng nhập
    $location.path('/login');
}



  $scope.hoantat = function(fom) {
    if (fom == true) {
        alert('thanh toán thành công')
        $scope.cart = [];
        $location.path('#!');
    } else {
        alert("Vui lòng điền đầy đủ thông tin");

        
    }
}
// User
// $scope.dk = {}; 
// $scope.userdk = JSON.parse(sessionStorage.getItem('dk')) || []; 

// $scope.dangky = function(fullname, phone, email, confirmPassword, form) {

//   if (!$scope.userdk ||  $scope.userdk.leth === 0) { 
//     $scope.userdk = {} ;
// }
//     if (form == true) {
//       var iddk= Math.random(1,1000);
//           $scope.dk = {
//             "idUser" : iddk, 
//             "name" : fullname,
//             "sđt" : phone,
//             "email" : email,
//             "passwork" : confirmPassword,
//              "rote":0

//           };

//           sessionStorage.setItem('dk', JSON.stringify($scope.dk));
//           $scope.userdk = JSON.parse(sessionStorage.getItem('dk')) || [];


//        $scope.dsUser.push($scope.userdk);
//        console.log($scope.dsUser);
//        alert('Đăng ký thành công')
//        $location.path('/login');

//     } else {
//         alert('Vui lòng điền đầy đủ thông tin');
//     }
// };

});
