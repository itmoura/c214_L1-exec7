const Filme = require('../src/models/filme');

it('create move', async () => {
    const filme = {
        titulo: 'Teste',
        diretor: 'Teste',
        genero: 'terror',
        ano: 2012
    };
    const res = await Filme.create(filme);
    expect(res.titulo).toEqual(filme.titulo);
})

it('create move with error', async () => {
    const filme = {
        titulo: 'Teste',
        diretor: 'Teste',
        genero: 'terror',
    };
    await Filme.create(filme)
        .then(res => res)
        .catch(err => {
            expect(err._message).toEqual('Filme validation failed');
        });
})

it('list move', async () => {
    const res = await Filme.find();
    expect(res.length).toBeGreaterThanOrEqual(1);
})

it('list move by id', async () => {
    const filme = await Filme.findOne();
    const res = await Filme.findById(filme._id);
    expect(res._id).toEqual(filme._id);
})

it('update move', async () => {
    const filme = await Filme.findOne();
    filme.titulo = 'Teste2';
    const res = await Filme.findByIdAndUpdate(filme._id, filme, {
        new: true,
    });
    expect(res.titulo).toEqual(filme.titulo);
})

it('delete move', async () => {
    const filme = await Filme.findOne();
    await Filme.findByIdAndRemove(filme._id);
    const res = await Filme.findById(filme._id);
    expect(res).toBeNull();
})