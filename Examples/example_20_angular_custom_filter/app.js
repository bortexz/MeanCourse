/**
 * Created by alberto on 9/7/15.
 */
angular.module('filters', []).controller('ItemListController', ItemListController);

function ItemListController($scope) {
  $scope.items = [
    {
      name:'playstation',
      category: 'consoles',
      price: 400,
      stock: 5
    },
    {
      name:'xbox',
      category: 'consoles',
      price: 300,
      stock: 8
    },
    {
      name:'samsung galaxy',
      category: 'mobiles',
      price: 400,
      stock: 10
    },
    {
      name:'LG TV 40"',
      category: 'tvs',
      price: 350,
      stock: 3
    },
    {
      name:'wiiU',
      category: 'consoles',
      price: 200,
      stock: 9
    },
    {
      name:'nexus 5',
      category: 'mobiles',
      price: 200,
      stock: 19
    },
    {
      name:'Samsung TV 32"',
      category: 'tvs',
      price: 300,
      stock: 1
    }
  ];

  $scope.selectedCategory = null;
  $scope.selectCategory = function(category) {
    $scope.selectedCategory = category;
  };

  $scope.categoryFilter = function(item) {
    return item.category == $scope.selectedCategory || $scope.selectedCategory == null;
  }
}