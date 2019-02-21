# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

# Although this is not needed for an api-only application, rails4 
# requires secret_key_base or secret_token to be defined, otherwise an 
# error is raised.
# Using secret_token for rails3 compatibility. Change to secret_key_base
# to avoid deprecation warning.
# Can be safely removed in a rails3 api-only application.
CourseraRubyOnRailsC6m1Assignment::Application.config.secret_token = 'd9006b913ee3b46a2dd3dc95d910ac6cf314fe9da499711bf7e3c4ebcc07745652f4906faebaf57a24e788d271dcc858d8a2d251732b7399a5e8c6fc7b5a56bd'
