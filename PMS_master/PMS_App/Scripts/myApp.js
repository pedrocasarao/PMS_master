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
        location.reload();
        alert("Usuário adicionado com sucesso!");


    }

    ctrl.DeleteUser = function () {
        $http.post("/PMS/DelUsuarios", ctrl.newData);
        Clear();
        location.reload();
    }

    ctrl.SelectUser = function (user) {
        ctrl.newData = user;
    }

    ctrl.AlterUser = function () {
        $http.post("/PMS/AlterUsuarios", ctrl.newData);
        Clear();
        alert("Usuário alterado com sucesso!");
    }

    function Clear() {
        ctrl.newData = "";
    }



});
