import { useList } from "@refinedev/core";
import { Typography, Box, Stack } from "@mui/material";

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
} from "components";

const Home = () => {
    const { data, isLoading, isError } = useList({
        resource: "products",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestProperties = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Products for Sale"
                    value={821}
                    series={[79, 21]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Products for Rent"
                    value={127}
                    series={[32, 68]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total customers"
                    value={11212}
                    series={[90, 10]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Off-season Products"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Latest Properties
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestProperties.map((property) => (
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
