'use strict'

const Telegram = require ('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('706438102:AAH6wc30qnxTq6zP3iaVKqiYmZ-llcBiy2k')

class EventsController extends TelegramBaseController {
    allEventsAction(scope) {

        /*TODO:Usar fetchAPI ou Axios para mandar requisição para 
         api Orchestrator
         TODO: Substituir valor do msg por retorno
         Tips* Fetch, Axios, Map, Promisse
        */ 
        let msg = 'QConSP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br'

        scope.sendMessage(msg)
    }

    get routes(){
        return {
            'allEvents' : 'allEventsAction'
        }
    }
}

chatbot.router
    .when(
        new TextCommand('/allevents', 'allEvents'), new 
        EventsController()
    )