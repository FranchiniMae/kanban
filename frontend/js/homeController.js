app.controller('HomeController', ['$scope', 'Goal', HomeController]);

app.service('Goal', function($resource) {
  return $resource('http://localhost:3000/api/goals/:id', {
    update: {
      method: 'PATCH' // this method issues a PUT request
    }
  });
});

// HomeController.$inject = ['$scope', 'Todo'];
function HomeController($scope, Goal) {
  // console.log(Todo)
  // $scope.todos = Todo.query();
  // $scope.createTodo = createTodo;
  // $scope.deleteTodo = deleteTodo;
  // $scope.newTodo = {};

  function createGoal() {
    // Todo.save($scope.newTodo);
    // $scope.todos.push($scope.newTodo);
    // $scope.newTodo = {};
  }

  function deleteGoal(goal) {
    // Todo.remove({id:todo._id});
    //  var todoIndex = $scope.todos.indexOf(todo);
    //  $scope.todos.splice(todoIndex, 1);
  }
  function updateGoal(goal) {
    // Todo.update({id: todo._id}, todo);
    // todo.editForm = false;
  }
}