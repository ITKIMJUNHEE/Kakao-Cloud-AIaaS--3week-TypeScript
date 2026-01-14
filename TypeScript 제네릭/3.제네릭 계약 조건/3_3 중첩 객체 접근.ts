function getNestedValue<T, K extends string>(obj: T, path: K): any {
  return path.split('.').reduce((acc: any, key) => acc && acc[key], obj);
}

const data = { user: { profile: { name: "Kim", address: { city: "Seoul" } } } };
console.log(getNestedValue(data, "user.profile.name")); 
console.log(getNestedValue(data, "user.profile.address.city")); 

export {};