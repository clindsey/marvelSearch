config = require 'config'

describe 'config', ->
  it 'has an api key', ->
    expect(config.apiKey).to.not.equal undefined
    expect(config.apiKey).to.not.equal ''

  it 'has an api base uri', ->
    expect(config.apiBaseUri).to.not.equal undefined
    expect(config.apiBaseUri).to.not.equal ''

  it 'has items per page defined', ->
    expect(config.itemsPerPage).to.not.equal undefined
    expect(typeof config.itemsPerPage).to.equal 'number'
