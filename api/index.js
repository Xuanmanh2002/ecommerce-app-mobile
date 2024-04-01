const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
app.listen(port, () => {
  console.log("Máy chủ đang chạy trên cổng 8000");
});

mongoose
  .connect("mongodb+srv://suanmanh:manh2002@cluster0.swzyvnx.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Đã kết nối với MongoDB");
  })
  .catch((err) => {
    console.log("Lỗi kết nối với MongoDb", err);
  });

const User = require("./models/user");
const Order = require("./models/order");

const sendVerificationEmail = async (email, verificationToken) => {
  // Tạo trình vận chuyển Nodemailer
  const transporter = nodemailer.createTransport({
    // Cấu hình dịch vụ email hoặc chi tiết SMTP tại đây
    service: "gmail",
    auth: {
      user: "nguyenxuanmanh2k2@gmail.com",
      pass: "zyfinfpxjnggcxuk",
    },
  });

  //Soạn thư email
  const mailOptions = {
    from: "shopee.vn",
    to: email,
    subject: "Email xác thực",
    text: `Vui lòng nhấp vào liên kết sau để xác minh email của bạn: http://localhost:8000/verify/${verificationToken}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email xác minh đã được gửi thành công");
  } catch (error) {
    console.error("Lỗi gửi email xác minh:", error);
  }
};
// Đăng ký người dùng mới
// ... nhập và thiết lập hiện có ...

app.post("/register", async (req, res) => {
  try {
    const { phoneNumber, fullName, password, email, gender } = req.body;

    // Kiểm tra xem email đã được đăng ký chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email đã đăng ký:", email); // Câu lệnh gỡ lỗi
      return res.status(400).json({ message: "Email đã đăng ký" });
    }

    // Tạo người dùng mới
    const newUser = new User({ phoneNumber, fullName, password, email, gender });

    // Tạo và lưu trữ mã thông báo xác minh
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Lưu người dùng vào cơ sở dữ liệu
    await newUser.save();

    // Câu lệnh gỡ lỗi để xác minh dữ liệu
    console.log("Người dùng mới đã đăng ký:", newUser);

    // Gửi email xác minh cho người dùng
    // Sử dụng dịch vụ email hoặc thư viện ưa thích của bạn để gửi email
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message:
        "Đăng ký thành công. Vui lòng kiểm tra email của bạn để xác minh.",
    });
  } catch (error) {
    console.log("Error during registration:", error); // Tuyên bố gỡ lỗi
    res.status(500).json({ message: "Đăng ký không thành công" });
  }
});

//điểm cuối để xác minh email
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    // Tìm người dùng có mã thông báo xác minh đã cho
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Mã thông báo xác minh không hợp lệ" });
    }

    //Mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email đã được xác minh thành công" });
  } catch (error) {
    res.status(500).json({ message: "Xác minh email không thành công" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};

const secretKey = generateSecretKey();

//điểm cuối để đăng nhập người dùng!
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //kiểm tra xem người dùng có tồn tại không
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email hoặc mật khẩu không hợp lệ" });
    }

    //check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Mật khẩu không hợp lệ" });
    }

    //generate a token
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Đăng nhập thất bại" });
  }
});

//endpoint to store a new address to the backend
app.post("/addresses", async (req, res) => {
  try {
    const { userId, address } = req.body;

    //find the user by the Userid
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //add the new address to the user's addresses array
    user.addresses.push(address);

    //save the updated user in te backend
    await user.save();

    res.status(200).json({ message: "Address created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error addding address" });
  }
});

//endpoint to get all the addresses of a particular user
app.get("/addresses/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const addresses = user.addresses;
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: "Error retrieveing the addresses" });
  }
});

//endpoint to store all the orders
app.post("/orders", async (req, res) => {
  try {
    const { userId, cartItems, totalPrice, shippingAddress, paymentMethod } =
      req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //create an array of product objects from the cart Items
    const products = cartItems.map((item) => ({
      name: item?.title,
      quantity: item.quantity,
      price: item.price,
      image: item?.image,
    }));

    //create a new Order
    const order = new Order({
      user: userId,
      products: products,
      totalPrice: totalPrice,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
    });

    await order.save();

    res.status(200).json({ message: "Order created successfully!" });
  } catch (error) {
    console.log("error creating orders", error);
    res.status(500).json({ message: "Error creating orders" });
  }
});

//get the user profile
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the user profile" });
  }
});

app.get("/orders/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await Order.find({ user: userId }).populate("user");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" })
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
})