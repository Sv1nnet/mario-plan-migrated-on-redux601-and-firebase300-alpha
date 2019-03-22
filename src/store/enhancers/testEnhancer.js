function testEnhancer() {
  return createStore => (...args) => {
    const store = createStore(...args);
    const testFunc = function () {
      console.log('test function');
    };

    return {
      ...store,
      testFunc,
    };
  };
}

export default testEnhancer;
