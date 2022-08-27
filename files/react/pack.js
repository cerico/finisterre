import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import WebpackerReact from 'webpacker-react'
import yay from 'yay'

WebpackerReact.setup({ yay })