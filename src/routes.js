var Slice = require('./models/slice')

module.exports = function (app) {

    app.get('/api/slices', function (request, response) {
        Slice.find(function (error, slices) {
            if (error) {
                response.send(error);
            }
            response.json(slices);
        })
    });

    app.post('/api/slices', function (request, response) {
        Slice.create({
            name: request.body.text,
            weight: 10
        }, function (error, slice) {
            if (error) {
                response.send(error);
            }
            Slice.find(function (error, slices) {
                if (error) {
                    response.send(error);
                }
                response.json(slices);
            });
        });
    });

    app.delete('/api/slices/:slice_id', function(request, response) {
        Slice.remove({
            _id : request.params.slice_id
        }, function(error, slice) {
            if(error) {
                response.send(error);
            }

            Slice.find(function(error, slices) {
                if(error) {
                    response.send(error);
                }
                response.json(slices);
            })
        })
    });

}
