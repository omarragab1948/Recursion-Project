import { Box, Card, CardMedia,  Typography } from "@mui/material";
import { ICategory, IProduct, IReply } from "../../types/product";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const recursiveSubCat = (sub: ICategory | null) => {
    if (sub && !sub.subCategory) {
      return (
        <Box sx={{ ml: 1 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {sub?.name}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {sub?.name}
          </Typography>
          {recursiveSubCat(sub && sub.subCategory)}
        </Box>
      );
    }
  };
  const recursiveReplies = (rep: IReply | null) => {
    if (rep && !rep.replies) {
      return (
        <Box sx={{ display: "flex", alignItems: "start", mt: 2, ml: 0 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {rep?.author}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {rep?.content}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            my: 2,
            flexDirection: "column",
            ml: 0,
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {rep?.author}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {rep?.content}
          </Typography>
          {rep &&
            rep.replies.map((reply) => (
              <Box key={reply.id} sx={{ ml: 2 }}>
                {recursiveReplies(reply)}
              </Box>
            ))}
        </Box>
      );
    }
  };
  return (
      <Card
        sx={{
          p: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: "contain",
            width: "100%",
            height: "350px",
            borderRadius: 2,
          }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Category: {product.category.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Related categories:
          </Typography>
          {recursiveSubCat(product.category.subCategory)}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            mt: 2,
            flexDirection: "column",
          }}
        >
          <Typography>Comments:</Typography>
          {product?.comments?.map((comment) => (
            <Box
              key={comment.id}
              sx={{
                display: "flex",
                alignItems: "start",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                {comment.author}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {comment.content}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Replies:
              </Typography>
              {comment.replies.map((reply) => (
                <Box
                  key={reply.id}
                  sx={{ display: "flex", alignItems: "start", ml: 0 }}
                >
                  {recursiveReplies(reply)}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Card>
  );
};

export default ProductDetails;
