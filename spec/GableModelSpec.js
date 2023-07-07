import GableModel from '../models/GableModel.js'

describe('GableModel', () => {
    let model
    beforeEach(() => {
      model = new GableModel()
    })
  
  describe('#triangles', () => {
      it('has one triangle', () => {
        expect(model.vertices().length/9).toBe(1)
      })
    })
  })