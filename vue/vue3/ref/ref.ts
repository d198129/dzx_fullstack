// const count = ref(ref(ref(2)));
// count.value.value.value = 3;
// { value: T }

// const count = ref({
//   foo: ref('1'),
//   bar: ref(2)
// })
// const count: Ref<{
//   foo: string,
//   bar: number
// }




// type Ref<T = any> = {
//   value: T
// }

// type UnwrapRef<T> = {
//   ref: T extends Ref<infer R> ? UnwrapRef<R> : T,
//   other: T
// }[T extends Ref ? 'ref' : 'other']
// // UnwrapRef<Ref<number>> // number
// function ref<T>(value: T): T extends Ref : Ref<UnwrapRef<T>> 

// // const count = ref(2);
// // count.value // number
// ref(ref(2));



// type Ref<T = any> = {
//   value: T
// }

// type UnwrapRef<T> = {
//   ref:  T extends Ref<infer R> ? UnwrapRef<R> : T
//   object: { [K in keyof T ]: UnwrapRef<T[K]> }
//   other: T
// }[T extends Ref ? 'ref' : T extends object ? 'object' : 'other']


// function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>