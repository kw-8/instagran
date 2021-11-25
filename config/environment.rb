# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# converts btw camel + snake case
Jbuilder.key_format camelize: :lower