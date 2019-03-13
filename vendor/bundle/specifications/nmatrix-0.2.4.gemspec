# -*- encoding: utf-8 -*-
# stub: nmatrix 0.2.4 ruby lib
# stub: ext/nmatrix/extconf.rb

Gem::Specification.new do |s|
  s.name = "nmatrix".freeze
  s.version = "0.2.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["John Woods".freeze, "Chris Wailes".freeze, "Aleksey Timin".freeze]
  s.date = "2017-12-14"
  s.description = "NMatrix is a linear algebra library for Ruby, written mostly in C and C++.".freeze
  s.email = ["john.o.woods@gmail.com".freeze]
  s.extensions = ["ext/nmatrix/extconf.rb".freeze]
  s.files = ["ext/nmatrix/extconf.rb".freeze]
  s.homepage = "http://sciruby.com".freeze
  s.licenses = ["BSD-3-Clause".freeze]
  s.post_install_message = "***********************************************************\nWelcome to SciRuby: Tools for Scientific Computing in Ruby!\n\nNMatrix requires a C/C++ compiler. Clang and GCC are \nrecommended. JRuby support is experimental, and requires\nJava.\n\nIf you are upgrading from NMatrix 0.1.0 and rely on\nATLAS features, please check the README.\n\nFaster matrix calculations and more advanced linear\nalgebra features are available by installing either\nthe nmatrix-atlas or nmatrix-lapacke plugins.\n\nMore explicit instructions for NMatrix and SciRuby should\nbe available on the SciRuby website, sciruby.com, or\nthrough our mailing list (which can be found on our web-\nsite).\n\nThanks for trying out NMatrix! Happy coding!\n\n***********************************************************\n".freeze
  s.required_ruby_version = Gem::Requirement.new(">= 1.9".freeze)
  s.rubygems_version = "2.7.6".freeze
  s.summary = "NMatrix is a linear algebra library for Ruby".freeze

  s.installed_by_version = "2.7.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<packable>.freeze, [">= 1.3.5", "~> 1.3"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.6"])
      s.add_development_dependency(%q<pry>.freeze, ["~> 0.10"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.3"])
      s.add_development_dependency(%q<rake-compiler>.freeze, ["~> 0.8"])
      s.add_development_dependency(%q<rdoc>.freeze, [">= 4.0.1", "~> 4.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.14"])
      s.add_development_dependency(%q<rspec-longrun>.freeze, ["~> 1.0"])
    else
      s.add_dependency(%q<packable>.freeze, [">= 1.3.5", "~> 1.3"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.6"])
      s.add_dependency(%q<pry>.freeze, ["~> 0.10"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.3"])
      s.add_dependency(%q<rake-compiler>.freeze, ["~> 0.8"])
      s.add_dependency(%q<rdoc>.freeze, [">= 4.0.1", "~> 4.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.14"])
      s.add_dependency(%q<rspec-longrun>.freeze, ["~> 1.0"])
    end
  else
    s.add_dependency(%q<packable>.freeze, [">= 1.3.5", "~> 1.3"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.6"])
    s.add_dependency(%q<pry>.freeze, ["~> 0.10"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.3"])
    s.add_dependency(%q<rake-compiler>.freeze, ["~> 0.8"])
    s.add_dependency(%q<rdoc>.freeze, [">= 4.0.1", "~> 4.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.14"])
    s.add_dependency(%q<rspec-longrun>.freeze, ["~> 1.0"])
  end
end
