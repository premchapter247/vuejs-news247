<template>
    <ul class="post-list-view">
        <li>
            <a href="" class="post-list-view-link">
                <div class="list-img-wrap">
                    <img src="https://newsprk.quomodosoft.com/static/media/tab1.81e238f1.jpg" >
                </div>
                <div class="list-content-wrap">
                    <div class="list-metas">

                    </div>
                    <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
                    </h4>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'PostListView',
}
</script>
<style scoped>
.post-list-view{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
}
.post-list-view li{
    padding-bottom: 10px;
    border-bottom: 1px dashed #3a434b;
}
.post-list-view-link{
    width: 100%;
    display: flex;
    color: #17222b;
    align-items: center;
}
.list-img-wrap{
    height: 77px;
    width: 100px;
    position: relative;
    margin-right: 10px;
    overflow: hidden;
    flex-shrink: 0;
}
.list-img-wrap img{
    width: 100%;
    height: 100%;
    transition: all .3s;
    object-fit: cover;
    overflow: hidden;
}
.post-list-view-link:hover .list-img-wrap img{
    transform: scale(1.1);
}
.list-content-title{
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
}
</style>