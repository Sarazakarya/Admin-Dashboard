import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { EditProducts } from "../../Store/Slices/prodducteSlice";

const EditProductPopup = ({ open, onClose, product }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    if (product) {
      setTitle(product.PRODUCT || product.title || "");
      setDescription(product.description || "");
      setPrice(product.Price || product.price || "");
      setImage(product.Image || product.image || "");
      setRate(product.Rating || product.rating?.rate || 0);
      let cat = "";
      if (
        product.Category?.includes("men") ||
        product.category?.includes("men")
      )
        cat = "men";
      else if (
        product.Category?.includes("women") ||
        product.category?.includes("women")
      )
        cat = "women";
      else if (
        product.Category?.includes("kids") ||
        product.category?.includes("kids")
      )
        cat = "kids";
      setCategory(cat);
    }
  }, [product]);

  const handleEdit = () => {
    const updatedItem = {
      ...product,
      title,
      description,
      category,
      price,
      image,
      rating: { ...product.rating, rate },
    };
    dispatch(EditProducts(updatedItem));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="men">Men</MenuItem>
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="kids">Kids</MenuItem>
          </TextField>
          <TextField
            label="Price ($)"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />
          <TextField
            label="Rating"
            type="number"
            inputProps={{ min: 0, max: 5, step: 0.1 }}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            fullWidth
          />
          {image && (
            <Box mt={2} display="flex" justifyContent="center">
              <img
                src={
                  typeof image === "string" ? image : URL.createObjectURL(image)
                }
                alt="preview"
                style={{
                  width: "200px", 
                  height: "200px",
                  objectFit: "contain", 
                  borderRadius: 8,
                  border: "1px solid #ccc",
                }}
              />
            </Box>
          )}

          <Button variant="outlined" component="label">
            Upload Image
            <input
              type="file"
              hidden
              onChange={(e) => e.target.files && setImage(e.target.files[0])}
            />
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleEdit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductPopup;
