import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"

export const useFetchHomePageData = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ['homePageData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/webpages/homepage');
            return res?.data;
        },
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
};