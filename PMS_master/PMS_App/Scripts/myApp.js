var myApp = angular.module('myApp', []);

myApp.controller('usuariosCtrl', function ($http) {
    var ctrl = this;
    ctrl.newData = null;
    $http.get("/PMS/GetUsuario")
        .then(function (response) {
            ctrl.usuario = response.data;
        })
        .catch(function (response) {
            console.log(response);
        });

    
    ctrl.AddUsuario = function () {
        

        $http.post("/PMS/MyPostAction", ctrl.newData);

    }

    ctrl.DeleteUser = function (user) {
        $http.post("/PMS/DelUsuarios", user);
    }

    ctrl.EditarUsuario = function (user) {
        
    }


});
