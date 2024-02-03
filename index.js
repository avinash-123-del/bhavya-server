const express = require("express")
const enquirySchema = require("./model/formModel")
const ProductSchema = require("./model/productCategories")
const allProductSchema = require("./model/products")
require("./connection/db") // mongoconnection

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
  res.send(" <h1>Hello</h1>")
})

//--------------------------------product enquiry form------------------------------
app.post("/api/product-enquiry", async (req, res) => {
  const { name, email, message, contact } = req.body;

  if (!name || !email || !message || !contact) {
    return res.status(501).json({ message: "Please fill each fields" });
  } else {
    const newEnquiry = new enquirySchema({ name, email, message, contact });
    try {
      await newEnquiry.save();
      res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error saving enquiry:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

//--------------------------------get products by category------------------------
app.post("/api/product-categories", async (req, res) => {
  const { categoryName } = req.body;
  console.log(categoryName);

  try {
    // Find the category by its name
    const category = await ProductSchema.findOne({ category_name: categoryName });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//----------------------------craete product category-------------------------
app.post("/api/create-category", async (req, res) => {
  const { category_name, name } = req.body;

  const addCategory = new ProductSchema({ category_name, name })

  await addCategory.save()

  if (addCategory) {
    res.status(201).send("categroy added")
  }
  else {
    res.status(401).send("failed")
  }
})


//---------------------get all products--------------------------------
app.get("/api/products", async (req, res) => {

  const allProducts = await allProductSchema.find()

  if (allProducts) {
    res.status(201).json({ allProducts })
  }

  else {
    res.status(401).send("products failed to fetch")
  }
})

//--------------------------- get product by id------------------------------

app.get("/api/product/:id", async (req, res) => {
  const id = req.params.id

  const productById = await allProductSchema.findById(id)

  if(productById){

    res.status(201).json({productById})
  }
  else{
    res.status(401).send("product not found")
  }
})


app.listen(4500, () => {
  console.log("server start")
})