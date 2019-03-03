'use strict';

function getCtx(selector) {
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];

    var componentCtx = ctx.selectComponent(selector);

    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
}

function Toast(options) {
    var _options$selector = options.selector,
        selector = _options$selector === undefined ? '#toast' : _options$selector;

    var ctx = getCtx(selector);

    ctx.handleShow(options);
}

Toast.hide = function () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#toast';

    var ctx = getCtx(selector);

    ctx.handleHide();
};

function Message(options) {
    var _options$selector2 = options.selector,
        selector = _options$selector2 === undefined ? '#message' : _options$selector2;

    var ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    $Toast: Toast,
    $Message: Message
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImdldEN0eCIsInNlbGVjdG9yIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdHgiLCJsZW5ndGgiLCJjb21wb25lbnRDdHgiLCJzZWxlY3RDb21wb25lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJUb2FzdCIsIm9wdGlvbnMiLCJoYW5kbGVTaG93IiwiaGlkZSIsImhhbmRsZUhpZGUiLCJNZXNzYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsIiRUb2FzdCIsIiRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCO0FBQ3ZCLFFBQU1DLFFBQVFDLGlCQUFkO0FBQ0EsUUFBTUMsTUFBTUYsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQVo7O0FBRUEsUUFBTUMsZUFBZUYsSUFBSUcsZUFBSixDQUFvQk4sUUFBcEIsQ0FBckI7O0FBRUEsUUFBSSxDQUFDSyxZQUFMLEVBQW1CO0FBQ2ZFLGdCQUFRQyxLQUFSLENBQWMsc0JBQWQ7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNELFdBQU9ILFlBQVA7QUFDSDs7QUFFRCxTQUFTSSxLQUFULENBQWVDLE9BQWYsRUFBd0I7QUFBQSw0QkFDWUEsT0FEWixDQUNaVixRQURZO0FBQUEsUUFDWkEsUUFEWSxxQ0FDRCxRQURDOztBQUVwQixRQUFNRyxNQUFNSixPQUFPQyxRQUFQLENBQVo7O0FBRUFHLFFBQUlRLFVBQUosQ0FBZUQsT0FBZjtBQUNIOztBQUVERCxNQUFNRyxJQUFOLEdBQWEsWUFBK0I7QUFBQSxRQUFyQlosUUFBcUIsdUVBQVYsUUFBVTs7QUFDeEMsUUFBTUcsTUFBTUosT0FBT0MsUUFBUCxDQUFaOztBQUVBRyxRQUFJVSxVQUFKO0FBQ0gsQ0FKRDs7QUFNQSxTQUFTQyxPQUFULENBQWlCSixPQUFqQixFQUEwQjtBQUFBLDZCQUNZQSxPQURaLENBQ2RWLFFBRGM7QUFBQSxRQUNkQSxRQURjLHNDQUNILFVBREc7O0FBRXRCLFFBQU1HLE1BQU1KLE9BQU9DLFFBQVAsQ0FBWjs7QUFFQUcsUUFBSVEsVUFBSixDQUFlRCxPQUFmO0FBQ0g7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkMsWUFBUVIsS0FESztBQUViUyxjQUFVSjtBQUZHLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3R4IChzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgY29uc3QgY3R4ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG5cbiAgICBjb25zdCBjb21wb25lbnRDdHggPSBjdHguc2VsZWN0Q29tcG9uZW50KHNlbGVjdG9yKTtcblxuICAgIGlmICghY29tcG9uZW50Q3R4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aXoOazleaJvuWIsOWvueW6lOeahOe7hOS7tu+8jOivt+aMieaWh+aho+ivtOaYjuS9v+eUqOe7hOS7ticpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudEN0eDtcbn1cblxuZnVuY3Rpb24gVG9hc3Qob3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2VsZWN0b3IgPSAnI3RvYXN0JyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjdHggPSBnZXRDdHgoc2VsZWN0b3IpO1xuXG4gICAgY3R4LmhhbmRsZVNob3cob3B0aW9ucyk7XG59XG5cblRvYXN0LmhpZGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IgPSAnI3RvYXN0Jykge1xuICAgIGNvbnN0IGN0eCA9IGdldEN0eChzZWxlY3Rvcik7XG5cbiAgICBjdHguaGFuZGxlSGlkZSgpO1xufTtcblxuZnVuY3Rpb24gTWVzc2FnZShvcHRpb25zKSB7XG4gICAgY29uc3QgeyBzZWxlY3RvciA9ICcjbWVzc2FnZScgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY3R4ID0gZ2V0Q3R4KHNlbGVjdG9yKTtcblxuICAgIGN0eC5oYW5kbGVTaG93KG9wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAkVG9hc3Q6IFRvYXN0LFxuICAgICRNZXNzYWdlOiBNZXNzYWdlXG59OyJdfQ==