var elixir = require('laravel-elixir'),
    config = elixir.config;

// Enable watchify polling for our NFS-mounted VMs.
config.js.browserify.watchify.options.poll = true;

elixir(function (mix) {
    mix.browserify('app.js');
});
