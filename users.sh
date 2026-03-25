#!/bin/bash

set -e

DEFAULT_PASSWORD="ChangeMe123!"

# Departments / groups
GROUPS=("engineering" "hr" "finance" "marketing" "it")

# First and last name pools
FIRST_NAMES=("James" "Mary" "John" "Patricia" "Robert" "Jennifer" "Michael" "Linda" "William" "Elizabeth" "David" "Barbara" "Richard" "Susan" "Joseph" "Jessica" "Thomas" "Sarah" "Charles" "Karen")
LAST_NAMES=("Smith" "Johnson" "Williams" "Brown" "Jones" "Garcia" "Miller" "Davis" "Rodriguez" "Martinez" "Hernandez" "Lopez" "Gonzalez" "Wilson" "Anderson" "Thomas" "Taylor" "Moore" "Jackson" "Martin")

USER_COUNT=100   # change to 500 if needed

echo "[+] Creating groups..."
for group in "${GROUPS[@]}"; do
    if ! getent group "$group" > /dev/null; then
        groupadd "$group"
        echo "  Created group: $group"
    fi
done

echo "[+] Creating users..."

for i in $(seq 1 $USER_COUNT); do
    FIRST=${FIRST_NAMES[$RANDOM % ${#FIRST_NAMES[@]}]}
    LAST=${LAST_NAMES[$RANDOM % ${#LAST_NAMES[@]}]}

    # username = first initial + last name (lowercase)
    USERNAME="$(echo "${FIRST:0:1}${LAST}" | tr '[:upper:]' '[:lower:]')"

    # Handle duplicates by appending number
    COUNT=1
    ORIGINAL_USERNAME=$USERNAME
    while id "$USERNAME" &>/dev/null; do
        USERNAME="${ORIGINAL_USERNAME}${COUNT}"
        ((COUNT++))
    done

    GROUP=${GROUPS[$RANDOM % ${#GROUPS[@]}]}

    # Create user with comment (full name)
    useradd -m -g "$GROUP" -s /bin/bash -c "$FIRST $LAST" "$USERNAME"

    echo "$USERNAME:$DEFAULT_PASSWORD" | chpasswd
    chage -d 0 "$USERNAME"

    echo "  Created $USERNAME ($FIRST $LAST) in $GROUP"
done

echo "[+] Done."