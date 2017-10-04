/*
 * Unit tests for js/main.js
 */

'use strict';

describe('Main', function () {
    //var listData = 
    //var fixture = 

    beforeEach(function () {
        
        Site.data = {
            getSinglePost: function(id, printPost){}
        }
        
        Site.a = {
            animateLoading: function(bool){},
            initAnimations: function(){}
        }
        
        this.listData = [
            { id: 1, title: 'el 1' },
            { id: 2, title: 'el 2' }
        ];
        
        this.postData = {
            title: 'post title',
            body: 'post body'
        };
        
        //html fixture
        this.fixture = '<div id="fixture"><select id="post-list" class="control" disabled></select>' +
                '<div id="post"><h2></h2><p></p></div></div>';
        document.body.insertAdjacentHTML('beforeend', this.fixture);
        this.elSelect = document.getElementById('post-list');
        
        this.elPostHeader = document.querySelector('#post h2');
        this.elPostBody = document.querySelector('#post p');
    });
    
    afterEach(function(){
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('Should printPostList', function () {
        Site.main.printPostList(this.listData);
        //expect it to add 1 empty row and 2 records
        expect(this.elSelect.options.length).toEqual(3);
        expect(this.elSelect.options[1].text).toEqual(this.listData[0].title);
    });
    
    it('should printPost', function(){
        Site.main.printPost(this.postData);
        expect(this.elPostHeader.textContent).toEqual(this.postData.title);
        expect(this.elPostBody.textContent).toEqual(this.postData.body);
    });

});