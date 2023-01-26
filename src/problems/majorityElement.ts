function majorityElement(nums: number[]): number {
    const map: {[key: number]: number} = {}

    for(let i = 0; i < nums.length; i++) {
        nums[i] in map ? map[nums[i]] ++ : map[nums[i]] = 1

        if(map[nums[i]] > nums.length / 2) {
            return nums[i]
        }
    }
    return 0
}