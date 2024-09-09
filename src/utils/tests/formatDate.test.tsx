import { formatEducationDate, formatExperienceDate } from "../formatDate";

// it("formatEducationDate shows expected string for past date", () => {
//   const futureDate: Date = new Date();
//   futureDate.setDate(futureDate.getDate() - 1);
//   const formatted: string = formatEducationDate(futureDate);
//   const shouldEqual: string = futureDate.toLocaleDateString("default", {
//     month: "long",
//     year: "numeric",
//   });

//   expect(formatted).toEqual(shouldEqual);
// });

// it("formatEducationDate shows expected string for future date", () => {
//   const futureDate: Date = new Date();
//   futureDate.setDate(futureDate.getDate() + 1);
//   const formatted: string = formatEducationDate(futureDate);
//   const shouldEqual: string =
//     "Expected " +
//     futureDate.toLocaleDateString("default", {
//       month: "long",
//       year: "numeric",
//     });

//   expect(formatted).toEqual(shouldEqual);
// });

it("formatExperienceDate shows present string for current job", () => {
  const startDate: string = new Date(2020, 1, 1).toDateString();
  const endDate = null;
  const formatted: string = formatExperienceDate(startDate, endDate);
  const shouldEqual: string = "Feb 2020 - present";

  expect(formatted).toEqual(shouldEqual);
});

it("formatExperienceDate shows proper date for past job", () => {
  const startDate: string = new Date(2020, 1, 1).toDateString();
  const endDate: string = new Date(2020, 2, 1).toDateString();
  const formatted: string = formatExperienceDate(startDate, endDate);
  const shouldEqual: string = "Feb 2020 - Mar 2020";

  expect(formatted).toEqual(shouldEqual);
});
