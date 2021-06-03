<template>
    <div class="topbar white_bg">
        <v-container>
            <div class="topbar-inner">
                <div class="trand">
                    Tranding
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style>
    .topbar{
        border-bottom: 1px dashed #dcdedf;
    }
    .topbar-inner{
        display: flex;
    }
    .trand{
        margin-right: 10px;
        padding: 12px 20px;
        background: #f55;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 17px;
    }
</style>