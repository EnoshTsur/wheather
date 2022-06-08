const match = (value, result=null) => ({
    when: (predicate, resolver) => {
        if (result != null) {
            return match(value, result);
        }

        const passed = typeof predicate === 'function'
          ? predicate(value)
          : predicate === value;

        const lazyResolver = typeof resolver === 'function'
          ? () => resolver(value)
          : () => resolver;

        if (passed) {
            return match(value, lazyResolver())
        }
        return match(value, result);
    },
    orElse: (other) => result == null ? other : result,
    orElseGet: (supplier) => result == null ? supplier() : result
});

export default match;


