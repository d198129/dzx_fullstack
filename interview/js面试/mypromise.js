const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
  const that = this;
  that.state = PENDING;
  that.value = null;
  that.resolvedcallback = [];

  function resolved(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value;
      that.resolvedcallback.map(cb => {
        cb(value);
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED;
      that.value = value;
    }
  }

  function then(fn) {
    that.resolvedcallback.push(fn);
  }

  try {
    fn(resolved,reject)
  } catch (error) {
    reject(error);
  }
}