const paymentGateway = (req, res) => {
    res.render("PaymentGateway", {
      user: req.user
    });
  };
  
  // Handle form submission

  const submitPayment =  async (req, res) => {
    console.log(req.body);  
      try 
      {
        console.log("Booking Successfull");
        res.redirect('/create-job-success');
      } catch (error) {
        res.status(500).send(error);
      }
  };


  // const myPostingsView = async (req, res) => {
  //   try {
  //       const email = req.user.email;
  //       const hotelPostings =  await Car.find({ creatorEmail: email });
  //       res.render("viewMyPostings", {
  //           jobPostings: hotelPostings,
  //           user: req.user
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ message: 'Server error' });
  //     }
    
  // };

  

  
  module.exports = {
    paymentGateway,
    submitPayment
  };
  