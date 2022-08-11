// const paths = [
//   "app.js/customers/first_name",
//   "controllers/V1/A.js/customers/first_name",
//   "controllers/V1/B.js/users/phone",
//   "controllers/V2/C.js/users/name",
//   "models/D.js/users/address",
// ];

// // let fullPath = {};
// // paths.forEach(function (path) {
// //   path.split("/").reduce((r, i) => {
// //     return r[i] || (r[i] = {});
// //   }, fullPath);
// // });
// const list = [];
// paths.forEach((path) => {
//   list.push(path.split("/"));
// });

// // console.log(list);
// // console.log(list);
// console.log(JSON.stringify(createTree(list)));

// function createTree(arr, topItem = "root") {
//   const node = (name, title) => ({
//     id,
//     name,
//     children: [],
//     parentId,
//   });
//   const addNode = (parent, child) => {
//     parent.children.push(child);

//     return child;
//   };
//   const findNamedNode = (name, parent) => {
//     for (const child of parent.children) {
//       if (child.name === name) {
//         return child;
//       }
//       const found = findNamedNode(name, child);
//       if (found) {
//         return found;
//       }
//     }
//   };

//   const top = node(topItem, "repository");
//   let current;
//   for (const children of arr) {
//     let j = 0;
//     current = top;
//     // console.log(childs, childs.length, i);
//     for (const name of children) {
//       let title;
//       // console.log(name, j);
//       if (j === children.length - 1) {
//         title = "column";
//       } else if (j === children.length - 2) {
//         title = "table";
//       } else if (j === children.length - 3) {
//         title = "file";
//       } else {
//         title = "folder";
//       }
//       const found = findNamedNode(name, current);
//       current = found ? found : addNode(current, node(name, title));
//       j++;
//     }
//   }

//   return top;
// }

// // const toArrayTree = (obj) => {
// //   return Object.keys(obj).map((key) => {
// //     return typeof obj[key] === "object"
// //       ? { name: key, children: [toArrayTree(obj[key])] }
// //       : { name: key, [key]: obj[key] };
// //   });
// // };

// // const arrayPath = toArrayTree(fullPath);

// // console.log(JSON.stringify(arrayPath));
