function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'views/skills.html',
        controller: 'SkillsController',
        controllerAs: 'skillsCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}