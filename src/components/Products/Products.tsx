import { Box, Card, CardMedia, Container,  Grid2, Typography } from "@mui/material";
import { ICategory, IProduct } from "../../types/product";

const Products = ({ products }: { products: IProduct[] }) => {
  const recursiveSubCat = (sub: ICategory | null) => {
    if (sub && !sub.subCategory) {
      return (
        <Box sx={{ ml: 1,  }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "primary.main" }}>
            {sub?.name}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex", alignItems: "center",  my: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "primary.main" }}>
            {sub?.name}
          </Typography>
          {recursiveSubCat(sub && sub.subCategory)}
         </Box>
      );
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid2 container spacing={3}>
        {products?.map((product) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <Card
              sx={{
                p: 2,
                minHeight: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name.slice(0, 16)}
                  sx={{
                    objectFit: "contain",
                    width: "100%",
                    height: "200px",
                    borderRadius: 2,
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "text.primary" }}>
                  {product.name.length > 16 ? product.name.slice(0, 16) + "..." : product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                  Category: {product.category.name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "start", mt: 2 , flexDirection: "column" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Related categories:
                </Typography>
                {recursiveSubCat(product?.category?.subCategory)}
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Products;
