"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import FlatSearchResultModal from "./FlatSearchResultModal";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({});
  const [params, setParams] = useState<Record<string, any>>({});
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { data, isLoading } = useGetAllFlatsQuery({ ...searchParams });

  const handleSearchFlat = () => {
    setSearchParams(params);
    setOpen(true);
  };

  return (
    <Container
      sx={{
        mt: "80px",
      }}
    >
      <Box
        sx={{
          border: "1px solid #1586FD",
          padding: "30px",
        }}
      >
        <Typography
          sx={{ mb: "20px", textAlign: "center" }}
          variant="h5"
          component={"h5"}
        >
          Search Flat
        </Typography>

        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Type Location"
                type="text"
                size="small"
                fullWidth={true}
                name="searchTerm"
                onChange={(e) =>
                  setParams({ ...params, searchTerm: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Total Bedrooms"
                type="text"
                size="small"
                fullWidth={true}
                name="totalBedrooms"
                onChange={(e) =>
                  setParams({
                    ...params,
                    totalBedrooms: Number(e.target.value),
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Min Price"
                type="number"
                size="small"
                fullWidth={true}
                name="minPrice"
                onChange={(e) =>
                  setParams({ ...params, minPrice: Number(e.target.value) })
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Max Price"
                type="number"
                size="small"
                fullWidth={true}
                name="maxPrice"
                onChange={(e) =>
                  setParams({ ...params, maxPrice: Number(e.target.value) })
                }
              />
            </Grid>
          </Grid>
          {error && (
            <Box>
              <Typography
                color={"red"}
                textAlign={"center"}
                variant="h5"
                component={"h5"}
                my={"10px"}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ width: "320px", mt: { xs: "20px" } }}
              //   type="submit"
              size="small"
              onClick={handleSearchFlat}
              disabled={
                !(
                  params?.searchTerm ||
                  params.totalBedrooms ||
                  params.minPrice ||
                  params.maxPrice
                )
              }
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
      <FlatSearchResultModal
        open={open}
        setOpen={setOpen}
        flats={data?.data}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default SearchBar;
