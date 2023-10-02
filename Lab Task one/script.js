$(document).ready(function () {
  // Redirect to Sign In page
  $("#signInBtn").click(function () {
    window.location.href = "signin.html";
  });

  // Redirect to Sign Up page
  $("#signUpBtn").click(function () {
    window.location.href = "signup.html";
  });
});

$(document).ready(function () {
  // Form validation using jQuery Validation Plugin
  $("#signupForm").validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      username: {
        required: "Please enter your username",
        minlength: "Username must be at least 3 characters",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please enter a password",
        minlength: "Password must be at least 6 characters",
      },
    },
    submitHandler: function (form) {
      // Form submission logic goes here
      alert("Form submitted successfully!");
      // Reset the form
      form.reset();
    },
  });
});

$(document).ready(function () {
  // Form validation using jQuery Validation Plugin
  $("#signInForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please enter a password",
        minlength: "Password must be at least 6 characters",
      },
    },
    submitHandler: function (form) {
      // Form submission logic goes here (authentication, redirection, etc.)
      alert("Sign In successful!");
      // Reset the form
      form.reset();
    },
  });
});
