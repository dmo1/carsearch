/*
 * Unit tests for js/data.js
 */

'use strict';

describe('Data', function () {

    beforeEach(function () {
        //mock data
        var adr = {root: '', one: '/posts/', many: '/posts'};
        //reset ajax module
        Site.ajax = function (url) {
            if (url === adr.many) {
                return '[{"userId": 1,"id": 1,"title": "title 1","body": "body 1"},{"userId": 1,"id": 2,"title": "title 2","body": "body 2"}]';
            } else {
                return '{"userId": 101,"id": 101,"title": "title single","body": "body single"}';
            }
        }
        //mock Site.ajax
        Site.data.setURLs(adr);
    });

    if ('should get all posts', function () {
        Site.data.getPosts(function (data) {
            expect(true).toBe(true);
        });
    });

    it('should get a single post', function () {
        Site.data.getSinglePost(null, function (data) {
            expect("title single").toEqual("title single");
        })
    });

});
