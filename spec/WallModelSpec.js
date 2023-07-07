import WallModel from '../models/WallModel.js'

describe('WallModel', () => {
    let model
    beforeEach(() => {
      model = new WallModel()
    })
  
  describe('#triangles', () => {
      it('has 2 triangles', () => {
        expect(model.vertices().length/9).toBe(2)
      })
    })
  describe('#triangles', () => {
    it('has 6 triangles', () => {
      expect(model.vertices(5,5,5, true).length/9).toBe(6)
    })
  })
  })