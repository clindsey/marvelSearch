ventSpy = {
    trigger: sinon.spy()
    on: sinon.spy()
  }

window.require.register 'vent', (require, module) ->
  module.exports = ventSpy

sinon.stub window, 'require'

describe 'View Media Tabs', ->
  mediaTabsView = undefined

  beforeEach ->
    $('body').append '<div class="media-tabs">'

    mediaTabsView = new (window.require 'views/MediaTabs')

  afterEach ->
    $('.media-tabs').remove()

  it 'renders a template', ->
    el = mediaTabsView.render()

    expect($('ul.nav').length).to.not.equal 0

  describe 'with event listeners', ->
    view = undefined

    beforeEach ->
      view = mediaTabsView

    it 'handles characters', ->
      expect(ventSpy.on.calledWith('!characters:searchCount', view.onCharactersSearchCount, view)).to.equal true

    it 'handles comics', ->
      expect(ventSpy.on.calledWith('!comics:searchCount', view.onComicsSearchCount, view)).to.equal true

    it 'handles creators', ->
      expect(ventSpy.on.calledWith('!creators:searchCount', view.onCreatorsSearchCount, view)).to.equal true

    it 'listens for search', ->
      expect(ventSpy.on.calledWith('!search:term', view.onSearchTerm, view)).to.equal true


window.require.restore()
