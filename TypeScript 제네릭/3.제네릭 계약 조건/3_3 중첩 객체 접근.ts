function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

const data = { user: { profile: { name: "Kim" } } };
console.log(getNestedValue(data, "user.profile.name"));

export {};
// 테스트
const testdata = {
  user: {
    profile: {
      name: "Kim",
      address: {
        city: "Seoul"
      }
    }
  }
};

const name = getNestedValue(data, "user.profile.name"); // "Kim"
const city = getNestedValue(data, "user.profile.address.city"); // "Seoul"
