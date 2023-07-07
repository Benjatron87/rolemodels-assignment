import RoofPanelModel from '../models/RoofPanelModel.js'

describe('RoofPanelModel', () => {
    let model
    beforeEach(() => {
      model = new RoofPanelModel()
    })
  
  describe('#triangles', () => {
      it('has two triangles', () => {
        expect(model.vertices().length/9).toBe(2)
      })
    })
  })