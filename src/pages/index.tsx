import { getWeather } from "@/utils/api";
import { AxiosResponse } from "axios";
import { Weather } from "@/utils/types";
import HomeView from "@/components/home/home-view";
import WelcomePage from "@/components/welcome/welcome";

// const token =
//   "eyJraWQiOiJyS3dVT2xYeEJVMVhDa1pxQXYwMXc2YjlNSncxV2hNNVNXeU5LV2ZVcGJrPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiTWJvSlk3aEp1VUFBenJIckZtR0FhUSIsInN1YiI6Ijg5NWFhMDYxLWRiZjktNGEwZS05YWI5LTRjNjE2ZmFkMzk4OSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xX1gxMXh5aFR2NCIsImNvZ25pdG86dXNlcm5hbWUiOiI4OTVhYTA2MS1kYmY5LTRhMGUtOWFiOS00YzYxNmZhZDM5ODkiLCJvcmlnaW5fanRpIjoiYmI3NjNiZDQtNDg0OC00MjA3LWE5OTgtMTJlOWMxMmQyYjY3IiwiYXVkIjoiNGl0dWdlb2J0Y3E2dXNtYTFmN2xndGJndnMiLCJldmVudF9pZCI6ImY5NTYwYWUxLWU0ODQtNDJmNS1iM2QyLTk0YTNhYjczODMwZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjgyNTE5NTY2LCJleHAiOjE2ODI1MjMxNjYsImlhdCI6MTY4MjUxOTU2NiwianRpIjoiYzRhNmY2MGMtYzNlNC00ZDM0LThkMzAtNTNlYjAwMTc0OWY0IiwiZW1haWwiOiJnYWxpbW92cjg2QGdtYWlsLmNvbSJ9.dKNJQROJB3sfFTZuTAh7CwLtqMn7bsIBnH6ZofFsczsAQxyaQ0FOwYG5vCU3V4ztEUz-mgZFyn7y3Z9XcEtbemlLzYQHQQZgVaFOESpsgU0u2nqgMqVT4Y9U_UcV3x3InA3kG7h8cZYMcWaNd1xKWvmX8XlF7rPcUWkLGoURUAe72ynjd9CbFHgu8WXcW6A8Z5tuCZBPBcwPIlX-f4OJub70-0Mjq7aU1bObwCPMZW_fuvEAgb3xCOUHYWKEufRU247AJL8hkdvE9nHV7Tk9Ng3f1I9n5q1IOtbtntfPmBxsAKJ66dX_CcxtdwEE3ED8Hnk4FpNrDBsUdcB7R4nYuA";

export default function Home(props) {
  return <WelcomePage />;
}

// export async function getStaticProps() {
//   const weatherResponse: AxiosResponse<Weather> = await getWeather(
//     "Stockholm",
//     token
//   );
//   const weather: Weather = weatherResponse.data;
//
//   return {
//     props: {
//       weather: weather,
//     },
//     revalidate: 300,
//   };
// }
