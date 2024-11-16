import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data, setData } from "./data.slise";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rcslabs.ru/"}),
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query<Data, number>({
      query(req) {
        return {
            method: "GET",
            url: "ttrp"+req+".json",
            credentials: "same-origin"
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (error) {
            console.log(error)
        }
      },
    }),
  }),
});

export const {
  useGetDataQuery,
} = dataApi;

