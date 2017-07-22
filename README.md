# Webian Tablet Shell

[Webian Tablet Shell](http://webian.org/shell) is a graphical shell for the web (tablet version).

## Getting Started

Tablet Shell is designed to run as the system app on a touchscreen Android Things device.

When running on a device the intention is that the system chrome will be loaded inside a WebView/GeckoView.

For desktop development you can run and debug the system chrome using the experimental Quantum Browser Runtime (qbrt) from Mozilla.

To get started hacking on the Tablet Shell chrome, first make sure that you have [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com/) and [qbrt](https://mykzilla.org/2017/03/15/introducing-qbrt) installed, then simply clone the repository from GitHub and execute the system chrome using qbrt.

```
$ npm install -g qbrt
$ git clone https://github.com/webianproject/tablet-shell.git
$ cd tablet-shell/chrome
$ qbrt run ./
```

This will launch Webian Tablet Shell in a new window and also open developer tools.

## Copyrights, Trademarks and Licensing

© Ben Francis 2017

Webian is not affiliated with Firefox which is a registered trademark of the [Mozilla Foundation](http://mozilla.org), or Debian which is a registered trademark of [SPI](http://www.spi-inc.org/corporate/trademarks/).

Webian Shell is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Webian Shell is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Webian Shell in the LICENSE file. If not, see
<http://www.gnu.org/licenses/>.
