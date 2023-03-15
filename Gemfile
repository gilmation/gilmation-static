source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'jekyll'

gem 'redcarpet'
gem 'sass'
gem 'font-awesome-sass'
gem 'uglifier'

group :development do
  gem 'pry-doc'
  gem 'pry'
end

group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
end

ruby "3.1.3"
