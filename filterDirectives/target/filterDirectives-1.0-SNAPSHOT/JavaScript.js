var app = angular.module('filters', []);


app.controller("MyController", function ($scope) {
    $scope.test = "test";
    $scope.persons = [
        {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
        {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
        {name: 'Karen', gender: 'female', age: 31}];
});
app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()

        };
    }]).directive('formatCompany', function () {
    return {
        template: "\
<div style =\"border:1px solid black\" >     \n\
Company: {{user.companyName}} <br>\n\
    URL: <a href = {{user.companyUrl}}>Visit Us</a> <br>\n\
   Created: {{user.created}}\n\
created date is totaly close enough, dont  think about it\n\
</div> "
    };
}).directive('gallery', function () {
    return {
        restrict: 'EA',
        link: function (scope, element, attrs) {
            console.log(attrs.test);
            console.log(attrs.linkDemoDir)
            element[0].innerHTML = attrs.test;
            var attributeParts = attrs.content.split(',');
            for (var i = 0; i < attributeParts.length; i++) {
                element[0].innerHTML += "<img src=\" "+attributeParts[i] +".png\">"
                console.log(attributeParts[i]);
            }
        }
    }
});



app.filter('underAge', function () {
    return function (input) {
        var out = [];
        angular.forEach(input, function (person) {
            if (person.age < 16 && person.age > 5) {
                out.push(person);
            }
        });
        return out;
    }
})